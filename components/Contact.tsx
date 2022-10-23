import { Modal, OutlinedInput, Typography } from "@mui/material";
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
import { Box } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link } from "react-scroll";
import SectionTitle from "./common/SectionTitle";
import theme from "../theme";

const validators = {
  email: isValidEmail,
  name: notEmptyStr,
  message: notEmptyStr,
};

type Field = keyof typeof validators;

const initState = {
  name: "",
  email: "",
  message: "",
};

const initErrState = {
  name: false,
  email: false,
  message: false,
};

const initEmailState = {
  loading: false,
  error: false,
  success: false,
};

const Contact = () => {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    ...initState,
  });

  const [errors, setErrors] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({
    ...initErrState,
  });

  const [sendEmail, setSendEmail] = useState({
    ...initEmailState,
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

  const onClose = () => {
    setSendEmail({
      ...initEmailState,
    });
    setErrors({ ...initErrState });
    setState({ ...initState });
  };

  return (
    <div className="min-h-screen text-white pb-20">
      <SectionTitle
        prefix="Get"
        focus="in touch"
        subtitle="I’m always open to discussing new work or partnerships."
      />
      <div className="max-w-xl lg:max-w-screen-lg mx-auto grid grid-cols-12 gap-5 p-5">
        <div className="col-span-12 lg:col-span-4">
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
                    Check me on {s.lable}
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
        <div className="col-span-12 mt-4 lg:mt-0 lg:col-span-8">
          <p className="text-gray-100 leading-relaxed">
            If you have any suggestions, projects, or even you want to say
            Hello.. please fill out the form below and I will reply shortly.
          </p>
          <form className="mt-8" onSubmit={onSubmit}>
            <div className="w-full grid grid-cols-2 gap-4 lg:gap-6">
              <OutlinedInput
                name="name"
                value={state.name}
                error={errors.name}
                autoComplete="off"
                onChange={updateStateHandler}
                className="col-span-2 lg:col-span-1 bg-gray-800"
                sx={{
                  borderRadius: "1.5rem",
                  color: "#e5e7eb",
                }}
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
                className="col-span-2 lg:col-span-1 bg-gray-800"
                sx={{
                  borderRadius: "1.5rem",
                  color: "#e5e7eb",
                }}
                startAdornment={
                  <AlternateEmailIcon
                    className={`${
                      errors.email ? "text-red-500" : "text-indigo-500 "
                    } mr-2`}
                  />
                }
                placeholder="Your email"
              />
              <div className="col-span-2 px-4 py-5 flex items-start bg-gray-800 focus:outline-none focus-within:ring-2 focus-within:ring-indigo-500 min-h-100 rounded-3xl overflow-hidden">
                <QuestionAnswerIcon className="text-indigo-500 mr-3" />
                <textarea
                  name="message"
                  value={state.message}
                  onChange={updateStateHandler}
                  placeholder="Your message"
                  className="bg-transparent w-full h-200 pb-1 px-1 outline-none"
                />
              </div>
              <div className="col-span-2">
                <Button
                  variant="primary"
                  disabled={!isCurrentStateValid() || sendEmail.loading}
                  iconStart={sendEmail.loading ? undefined : <SendIcon />}
                >
                  {sendEmail.loading ? (
                    <CircularProgress size={25} />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </div>

            {sendEmail.error && (
              <p className="text-red-500 text-sm mt-3">
                Unexpected error occurred, please retry
              </p>
            )}
          </form>
        </div>
      </div>

      <Modal open={sendEmail.success} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            shadow: 24,
            [theme.breakpoints.down(768)]: {
              width: "min(100% - 2rem)",
              p: "40px 20px",
              maxWidth: "400px",
            },
            p: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: "black",
            "&:focus": {
              outline: "none",
            },
          }}
          className="text-gray-200 border-2 border-gray-700 rounded-lg"
        >
          <Typography
            className="mb-2"
            textAlign="center"
            fontFamily="Rubik"
            variant="h4"
          >
            Thank you 🎉🙌
          </Typography>
          <Typography
            className="mb-4"
            textAlign="center"
            fontFamily="Rubik"
            variant="body1"
          >
            I will response to you soon!
          </Typography>

          <Box className="flex flex-col-reverse lg:flex-row w-full mt-4">
            <Link className="block w-full" to="home" spy smooth duration={500}>
              <Button
                onClick={onClose}
                iconStart={<HighlightOffIcon />}
                className="w-full"
                variant="secondary"
              >
                Close
              </Button>
            </Link>
            <Link
              className="block mb-3 lg:mb-0 lg:ml-3 w-full"
              to="projects"
              spy
              smooth
              duration={200}
            >
              <Button
                onClick={onClose}
                iconStart={<BusinessCenterIcon />}
                className="w-full"
                variant="primary"
              >
                Portfolio
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;
