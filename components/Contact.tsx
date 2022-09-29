import { OutlinedInput, Typography } from "@mui/material";
import React, { useState } from "react";
import me from "../json/me.json";
import Tooltip from "./common/Tooltip";
import { SocialIcon } from "./icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SendIcon from "@mui/icons-material/Send";
import Button from "./common/Button";
import { isValidEmail, notEmptyStr } from "../utils";
import { CircularProgress } from "@mui/material";

const validators = {
  email: isValidEmail,
  name: notEmptyStr,
  message: notEmptyStr,
};

type Field = keyof typeof validators;

const Contact = () => {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({
    name: false,
    email: false,
    message: false,
  });

  const [sendEmail, setSendEmail] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const updateStateHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name;
    const value = e.target.value;

    if (!field) throw new Error("Missing field name");
    let validator = validators[field as Field];
    if (!validator) throw new Error(`${field} field has not validator`);

    const isValid = validator(value);
    setErrors({ ...errors, [field]: !isValid });
    setState({ ...state, [field]: value });
  };

  const isCurrentStateValid = () => {
    for (let field in validators) {
      let isValid = validators[field as Field];

      if (!isValid(state[field as keyof typeof state])) return false;
    }

    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendEmail({
      ...sendEmail,
      loading: true,
    });
    try {
      if (!isCurrentStateValid()) throw new Error("Can't send invalid request");

      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      setSendEmail({
        loading: false,
        error: false,
        success: true,
      });
    } catch (error) {
      setSendEmail({
        loading: false,
        error: true,
        success: true,
      });
    }
  };

  return (
    <div className="min-h-screen text-white snap-start">
      <div className="w-ful flex items-center justify-center flex-col py-16">
        <h1 className="text-7xl uppercase font-bold">
          Get <span className="text-indigo-500">in touch</span>
        </h1>
        <p className="mt-5 flex items-center justify-center">
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
          <span className="mx-4 inline-block uppercase">
            I’M ALWAYS OPEN TO DISCUSSING NEW WORK OR PARTNERSHIPS.
          </span>
          <span className="w-9 h-0.5 bg-indigo-500 inline-block"></span>
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-12">
        <div className="col-span-4">
          {me.contact.map((c) => (
            <div key={c.id} className="mb-5">
              <p className="mb-1.5 text-gray-400 capitalize text-sm">
                {c.label}
              </p>
              <div className="flex items-center justify-start">
                <SocialIcon id={c.id} className="fill-indigo-500" />
                <p className="ml-2">{c.value}</p>
              </div>
            </div>
          ))}

          <p className="mt-4 mb-1.5 text-gray-400 text-sm">Socal Profiles</p>
          <div className="flex items-center justify-start">
            {me.social.map((s) => (
              <Tooltip
                arrow
                placement="top"
                followCursor
                key={s.id}
                title={
                  <Typography fontFamily="Rubik">
                    Checkout me on {s.lable}
                  </Typography>
                }
              >
                <a
                  href={s.value}
                  target="_blank"
                  className="mr-4 cursor-pointer"
                  rel="noreferrer"
                >
                  <SocialIcon id={s.id} className="fill-indigo-500" />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="col-span-8">
          <p className="text-gray-100 leading-relaxed">
            If you have any suggestions, projects, or even you want to say
            Hello.. please fill out the form below and I will reply shortly.
          </p>
          <form className="mt-8" onSubmit={onSubmit}>
            <div className="w-full grid grid-cols-2 gap-8">
              <OutlinedInput
                name="name"
                value={state.name}
                error={errors.name}
                autoComplete="off"
                onChange={updateStateHandler}
                className="text-gray-200 rounded-3xl col-span-1 bg-gray-800"
                startAdornment={
                  <AccountCircleIcon
                    className={`${
                      errors.name ? "text-red-500" : "text-indigo-500 "
                    } mr-2`}
                  />
                }
                placeholder="Your name"
              />
              <OutlinedInput
                name="email"
                autoComplete="off"
                value={state.email}
                error={errors.email}
                onChange={updateStateHandler}
                className="text-gray-200 rounded-3xl grid-cols-1 bg-gray-800"
                startAdornment={
                  <AlternateEmailIcon
                    className={`${
                      errors.email ? "text-red-500" : "text-indigo-500 "
                    } mr-2`}
                  />
                }
                placeholder="Your email"
              />
            </div>
            <div className="my-8 px-4 py-5 flex items-start bg-gray-800 focus:outline-none focus-within:ring-2 focus-within:ring-indigo-500 min-h-100 rounded-3xl overflow-hidden">
              <QuestionAnswerIcon className="text-indigo-500 mr-3" />
              <textarea
                name="message"
                value={state.message}
                onChange={updateStateHandler}
                placeholder="Your message"
                className="bg-transparent w-full h-200 pt-1 px-1 outline-none"
              />
            </div>
            <Button
              disabled={!isCurrentStateValid() || sendEmail.loading}
              iconStart={sendEmail.loading ? undefined : <SendIcon />}
            >
              {sendEmail.loading ? (
                <CircularProgress size={25} />
              ) : (
                "Send Message"
              )}
            </Button>

            {sendEmail.error && (
              <p className="text-red-500 text-sm mt-3">
                Unexpected error occurred, please retry
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
