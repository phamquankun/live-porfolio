import * as React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

interface ISocialProps {}
const SOCIAL_OPTIONS = [FaLinkedin, FaGithub, FaFacebook];
export const Social: React.FunctionComponent<ISocialProps> = (props) => {
  return (
    <div className="sticky z-9 w-14 bottom-3 left-1 md:left-6 flex flex-col gap-1 items-center">
      <div className="flex flex-col gap-3">
        {SOCIAL_OPTIONS.map((Component, index) => (
          <Component
            key={index}
            size={25}
            className="cursor-pointer hover:text-sky-700 dark:text-white dark:hover:text-gray-400"
          />
        ))}
      </div>
    </div>
  );
};
