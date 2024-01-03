import Image from "next/image";
import * as React from "react";
import { MotionDiv } from "./MotionDiv";

interface IIntroduceProps {}
const text = `<h1> Hello I'm Q.Pham </h1>`;
export const Introduce: React.FunctionComponent<IIntroduceProps> = (props) => {
  return (
    <MotionDiv className="flex flex-col items-center gap-6 justify-between lg:lg:w-3/4 w-11/12 w-11/12 mx-auto bg-white rounded-xl p-4">
      <div className="flex flex-col gap-2 items-center">
        <div className="w-[300px] h-[300px] rounded-full bg-sky-300 flex items-center justify-center">
          <Image
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
            width={220}
            height={250}
          />
        </div>
        <div className="typewriter">
          <h1 className="font-semibold text-slate-600 text-lg">
            {text}
          </h1>
        </div>
      </div>
      <div className="text-center">
        <span className="font-medium text-lg text-sky-950">
          I’m a front-end developer with 1.5 years experience in Web
          development. With my knowledge of UX/UI design, I enjoy solving
          front-end problems and creating the best user experience for users. I
          also spend time learning new technologies and best practices to become
          a better developer.
        </span>
        <br />
        <i className="text-slate-600 font-semibold">{`<Q.Pham />`}</i>
      </div>
    </MotionDiv>
  );
};
