import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { isValidEmail, notEmptyStr } from "../../utils";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const USER_EMAIL = process.env.USER_EMAIL;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
type Request = Override<
  NextApiRequest,
  {
    body: Body;
  }
>;

type Body = {
  name: string;
  email: string;
  message: string;
};

type Field = "name" | "message" | "email";

const validators: Array<{
  field: Field;
  isValid(val: string): boolean;
  msg: string;
}> = [
  {
    field: "name",
    isValid: notEmptyStr,
    msg: "Empty name",
  },
  {
    field: "message",
    isValid: notEmptyStr,
    msg: "Empty message",
  },
  {
    field: "email",
    isValid: isValidEmail,
    msg: "Invalid email",
  },
];

export default async function handler(
  req: Request,
  res: NextApiResponse<
    | {
        success: boolean;
        message: string;
      }
    | Array<{ field: Field; msg: string }>
  >
) {
  if (req.method !== "POST") {
    res.status(400).json({
      success: false,
      message: "Invalid request",
    });
    return;
  }

  const errors: Array<{ field: Field; msg: string }> = [];

  validators.forEach(({ field, isValid, msg }) => {
    if (!isValid(req.body[field])) errors.push({ field, msg });
  });

  if (errors.length !== 0) {
    res.status(400).json(errors);
    return;
  }

  const { name, email, message } = req.body;
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token as string,
      },
    });

    await transporter.sendMail({
      from: email,
      to: USER_EMAIL,
      subject: `Message from ${name}`,
      text: `Hi, I am ${name} ( ${email} )\n${message}`,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    let message = "Unexpected error occurred, please retry";
    if (typeof error === "string") message = error;
    else if (error instanceof Error) message = error.message;

    res.status(500).json({
      success: false,
      message,
    });
  }
}
