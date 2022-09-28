import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

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

export default async function handler(req: Request, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).json({
      message: "Invalid request",
    });
    return;
  }

  const { name, email, message } = req.body;
  const accessToken = await oAuth2Client.getAccessToken();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ahmedibarhim556@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken.token as string,
    },
  });

  let info = await transporter.sendMail({
    from: '"Hi, Ahmed 👻" <foo@example.com>', // sender address
    to: "ahmedibarhim556@gmail.com", // list of receivers
    subject: ".env.local", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  res.status(200).json({
    info,
  });
}
