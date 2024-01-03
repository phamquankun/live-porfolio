import * as React from "react";

interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FunctionComponent<IContentProps> = ({ children }) => {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-[calc(100vh-64px)] py-8">
      {children}
    </div>
  );
};

export default Content;
