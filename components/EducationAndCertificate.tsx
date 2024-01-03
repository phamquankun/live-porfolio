import * as React from "react";
import { MotionDiv } from "./MotionDiv";

interface IEducationAndCertificateProps {}

export const EducationAndCertificate: React.FunctionComponent<
  IEducationAndCertificateProps
> = (props) => {
  return (
    <MotionDiv className="lg:w-3/4 w-11/12 mx-auto bg-white rounded-xl p-4 flex flex-col edu-bg">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl ">Education</h1>
        <span className="text-gray-700 font-semibold text-lg">
          University of Information Technology: 2018 -2022{" "}
        </span>
        <span>
          Website:{" "}
          <a className="text-blue-500 hover:underline italic cursor-pointer text-sm">
            https://daa.uit.edu.vn/
          </a>
        </span>
        <span>Major: Information System (Regular Program)</span>
        <span>
          GPA: 7.85/10{" "}
          <a className="text-blue-500 hover:underline italic cursor-pointer text-sm">
            View certificate
          </a>
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-700 font-semibold text-lg">
          Foreign Languages
        </h1>
        <span>
          English (Toeic 720){" "}
          <a className="text-blue-500 hover:underline italic cursor-pointer text-sm">
            View certificate
          </a>
        </span>
      </div>
    </MotionDiv>
  );
};
