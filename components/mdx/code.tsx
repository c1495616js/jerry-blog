import React, { Component, DetailedHTMLProps, HTMLAttributes } from "react";

interface Props {}

export const Code = ({ children, ...props }: React.PropsWithChildren<Props>) => {
  return (
    <code {...props} className="rounded-md bg-red-400 p-1 text-white before:content-[''] after:content-['']">
      {children}
    </code>
  );
};
