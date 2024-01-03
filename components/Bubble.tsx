import * as React from "react";
import styles from "@/styles/bubble.module.css";
import { FaCaretRight } from "react-icons/fa";
import { TimeLine } from "./TimeLine";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
interface IBubbleProps {}
interface Content {
  title: string;
  content: string | { title: string; content: string }[];
}
interface ProjectDetail {
  rangeTime: string;
  nameProject: string;
  content: Content[];
}
export interface Project {
  companyName: string;
  projects: ProjectDetail[];
}

const projects: Project[] = [
  {
    companyName: "09/2021 – 03/2023 : Sparkminds Joint Stock Company",
    projects: [
      {
        rangeTime: "Sep 2021 -  May 2022",
        nameProject: "Maxbit Dashboard",
        content: [
          {
            title: "Position",
            content: "Front-end developer",
          },
          {
            title: "Team size",
            content: "4",
          },
          {
            title: "Description",
            content:
              "A web app (Dashboard) to help ADMIN manage system like coin info, system global, export, accounting rexport, trade settings...",
          },
          {
            title: "Technologies",
            content: [
              {
                title: "Framework",
                content: "Reactjs",
              },
              {
                title: "Languages",
                content: "Javascript",
              },
              {
                title: "Connect API",
                content: "Axios client",
              },
              {
                title: "Manage Form",
                content: "React Hook Form",
              },
              {
                title: "Validate",
                content: "Yup",
              },
              {
                title: "Manage State",
                content: "Redux Toolkit",
              },
              {
                title: "Library UI",
                content: "Bootstrap",
              },
            ],
          },
          {
            title: "Responsibilities",
            content: [
              {
                title: "",
                content:
                  "Responsible for implement the new screens for trading crypto currency. Including system setting, accounting report, manage staff/customer....",
              },
              {
                title: "",
                content: "Bug fixing, refactor, maintainnace code",
              },
              {
                title: "",
                content: "Integration with socket, API...",
              },
              {
                title: "",
                content: "Integration with socket, API...",
              },
              {
                title: "",
                content:
                  "Discuss with team and PM to clear requirement, get the ticket confirmation",
              },
            ],
          },
        ],
      },
      {
        rangeTime: "Jun 2022 - Mar 2023",
        nameProject: "Maxbit Market Place",
        content: [
          {
            title: "Position",
            content: "Front-end developer",
          },
          {
            title: "Team size",
            content: "3",
          },
          {
            title: "Description",
            content:
              "A web app to manage crypto. User can manage bank to fiat or deposit, can also buy/sell crypto/fiat, or monitor coin market movement...",
          },
          {
            title: "Technologies",
            content: [
              {
                title: "Framework",
                content: "Reactjs",
              },
              {
                title: "Languages",
                content: "Typescript",
              },
              {
                title: "Connect API",
                content: "Axios client",
              },
              {
                title: "Manage Form",
                content: "Antd Form",
              },
              {
                title: "Validate",
                content: "Antd Form",
              },
              {
                title: "Manage State",
                content: "Redux Toolkit",
              },
              {
                title: "Library UI",
                content: "Antd",
              },
            ],
          },
          {
            title: "Responsibilities",
            content: [
              {
                title: "",
                content:
                  "Responsible for implement the new screens (version 1.0) for trading crypto currency. Including FIAT Banks, History, Notification, Login, Signup, all KYC flows...",
              },
              {
                title: "",
                content:
                  "Responsible for bug fixing and implement new screen on admin panel to manage all setting of the trading crypto currency app (Menu, all reports...)",
              },
              {
                title: "",
                content:
                  "Successfully implemented features including Dark/Light mode for web-frontend",
              },
              {
                title: "",
                content: "Integration with socket, API...",
              },
              {
                title: "",
                content: "Responsible for responsive on multiple devices.",
              },
              {
                title: "",
                content:
                  "Discuss with team and PM to clear requirement, get the ticket confirmation..",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const Bubble: React.FunctionComponent<IBubbleProps> = (props) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <MotionDiv className="lg:w-3/4 w-11/12 mx-auto bg-white rounded-xl p-4">
      <h1 className="font-semibold text-2xl ">
        Professional Experience
      </h1>
      <div className="flex items-center w-full justify-center gap-4 mb-6">
        {["Sparkminds JSC", "Viettel Solutions"].map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentTab ? "border-b border-black" : ""
            } flex items-center w-80 justify-center`}
          >
            <span
              className={`font-semibold text-lg md:text-2xl p-4 cursor-pointer text-center`}
              onClick={() => setCurrentTab(index)}
            >
              {item}
            </span>
            <Image
              alt=""
              src={
                index === 0
                  ? "https://sparkminds.net/wp-content/uploads/2023/05/favicon-32x32-1.png"
                  : "https://solutions.viettel.vn/themes/vtsolution/images/mve_logo.ico"
              }
              width={25}
              height={25}
            />
          </div>
        ))}
      </div>
      {projects.map((item, index) => (
        <TimeLine data={item} key={index} />
      ))}
    </MotionDiv>
  );
};
