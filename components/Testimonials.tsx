import { Link, Typography } from "@mui/material";
import theme from "../theme";
import me from "../json/me.json";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 py-12 mx-auto bg-black rounded-xl shadow-2xl max-w-screen-lg">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className=" text-base md:text-2xl text-center font-medium text-gray-900 dark:text-white leading-relaxed px-4">
            &quot;{me.testimonials.main.text}&quot;
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="rounded-full overflow-hidden inline-block">
              <Image
                width={60}
                height={60}
                src={me.testimonials.main.owner.image}
                alt={me.testimonials.main.owner.name}
              />
            </div>
            <div className="flex flex-col">
              <Typography
                href={me.testimonials.main.owner.linkedin}
                target="_blank"
                component={Link}
                className="text-sky-400"
                sx={{
                  textAlign: "left",
                  fontSize: "1rem",
                  display: "block",
                  textDecoration: "none",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.5rem",
                  },
                }}
              >
                {me.testimonials.main.owner.name}
              </Typography>
              <p className="text-sm font-light text-gray-400">
                {me.testimonials.main.owner.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
