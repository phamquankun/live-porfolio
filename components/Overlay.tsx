import * as React from "react";
import { DottedButton } from ".";

interface IOverlayProps {}

export const Overlay: React.FunctionComponent<IOverlayProps> = ({}) => {
  return (
    <div className="z-[999] flex items-center bg-zinc-50 justify-center absolute top-0 right-0 left-0 bottom-0  w-screen h-screen">
      <div className="drop-shadow-lg flex flex-col bg-white gap-4 border py-6 px-4 rounded-xl border-dotted border-gray-500 md:w-1/2 w-full md:m-0 m-3 justify-center items-center">
        <span className="font-bold text-5xl text-stone-700">{`<Q.Pham />`}</span>
        <p className="md:w-1/2 w-full  text-center font-medium ">
          I’m a front-end developer with 1.5 years experience in Web
          development. With my knowledge of UX/UI design, I enjoy solving
          front-end problems and creating the best user experience for users. I
          also spend time learning new technologies and best practices to become
          a better developer.
        </p>{" "}
        <DottedButton />
      </div>
    </div>
  );
};
