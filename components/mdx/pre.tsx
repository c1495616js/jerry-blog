import React from "react";

import { CopyButton } from "./copy-button";

type Props = {
  raw: string;
  [x: string]: any;
};
export const Pre = ({ children, raw, ...props }: React.PropsWithChildren<Props>) => {
  const lang = props["data-language"] || "shell";
  return (
    <pre {...props} className={"p-0"}>
      <div className={"code-header"}>
        {lang}
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
};
