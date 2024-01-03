import * as React from "react";
import { FaCaretRight } from "react-icons/fa";
import { Project } from "./Bubble";

interface ITimeLineProps {
  data: Project;
}

export const TimeLine: React.FunctionComponent<ITimeLineProps> = ({ data }) => {
  return (
    <div className="ml-5">
      <h1 className="font-semibold text-lg md:text-2xl">{data.companyName}</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.projects.map((project, stt) => (
          <li className="mb-10 ms-4" key={stt}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {project?.rangeTime}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {project?.nameProject}
            </h3>
            {project?.content?.map((item, index) => {
              if (Array.isArray(item.content)) {
                return (
                  <div key={index}>
                    <span className="font-semibold">{item.title}:</span>
                    <ul className="ml-3">
                      {item.content.map((it, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaCaretRight size={16} color="green" />

                          {it.title && (
                            <span className="font-semibold text-gray-800">
                              {it.title}:
                            </span>
                          )}
                          <span>{it.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <span className="font-semibold">{item.title}:</span>
                    <span>{item.content}</span>
                  </div>
                );
              }
            })}
          </li>
        ))}
      </ol>
    </div>
  );
};
