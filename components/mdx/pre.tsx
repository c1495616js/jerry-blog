import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";

import { CopyButton } from "./copy-button";

interface Props {
  raw: string;
  ["data-language"]?: string;
  [x: string]: any;
}

export const Pre = ({ children, raw, ...props }: React.PropsWithChildren<Props>) => {
  const lang = props["data-language"] || "shell";
  return (
    <pre {...props} className={"group p-0"}>
      <div className={"code-header"}>
        <div className="flex rounded-full bg-red-200 px-3 py-1 text-xs font-bold  text-red-700">
          <span>{lang}</span>
        </div>
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
};
