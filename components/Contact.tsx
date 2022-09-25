import React from "react";
import me from "../json/me.json";
import { SocialIcon } from "./icons";

const Contact = () => {
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

      <div>
        <div>
          {me.contact.map((c) => (
            <div key={c.id}>
              <p>{c.label}</p>
              <div>
                <SocialIcon id={c.id} />
                <p>{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
