import { motion } from "framer-motion";
import * as React from "react";
import { FaCaretRight, FaGitSquare, FaFigma, FaJira } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { MotionDiv } from "./MotionDiv";
interface ITechnicalProps {}
interface TechnicalItem {
  [key: string]: string;
}

const TECHNICALS: TechnicalItem[] = [
  { "Programming Languages": "Javascript, TypeScript, HTML, CSS/SCSS, Less" },
  { "Library/Framework": "Reactjs, Nextjs, Vuejs, Sveltejs" },
  { "Library UI": "Antd, Bootstrap, Material UI, Tailwind" },
  { "Manage Form": "React Hook Form, Formilk" },
  { "Connect API": "Axios client" },
  { "Manage State": "Redux/ Redux ToolKit, Vuex, Piana" },
  { "Database Management Systems": "MySQL" },
];

const TOOLS = [
  {
    title: "Visual Studio Code",
    icon: <TbBrandVscode size={20} color="rgb(63 131 248 / 1" />,
  },
  {
    title: "Git",
    icon: <FaGitSquare size={20} color="#f05252" />,
  },
  {
    title: "Figma",
    icon: <FaFigma />,
  },
  {
    title: "Jira",
    icon: <FaJira size={20} color="blue" />,
  },
];

export const Technical: React.FunctionComponent<ITechnicalProps> = (props) => {
  return (
    <MotionDiv className="lg:w-3/4 w-11/12 mx-auto bg-white rounded-xl p-4 flex flex-col">
      <h1 className="font-semibold text-2xl ">
        Technical Skills
      </h1>
      <span className="text-gray-700 font-semibold text-lg">
        Here is few technologies I've been working with recently:
      </span>
      {TECHNICALS.map((item, index) => (
        <div key={index} className="ml-4">
          {Object.keys(item).map((ob, i) => (
            <div className="flex gap-4 items-center" key={i}>
              <FaCaretRight size={16} color="green" />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2">
                <h1 className="text-gray-700 font-semibold text-base">{ob}:</h1>
                <span>{item?.[ob]}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
      <span className="text-gray-700 font-semibold text-lg">
        Some tools I can use:
      </span>
      <div className="ml-4">
        {TOOLS.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <FaCaretRight size={16} color="green" />
            <div className="flex items-center gap-3">
              <span>{item.title}</span>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
};
