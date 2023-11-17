"use client";

import { useState } from "react";
import { clsx } from "clsx";

type Props = {
  text: string;
};

export const CopyButton = ({ text }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button
      type="button"
      aria-label="Copy to Clipboard"
      onClick={copy}
      disabled={isCopied}
      className={clsx(
        "ml-2 flex rounded-md border bg-transparent p-2 transition ease-in focus:outline-none group-hover:flex md:hidden",
        {
          "border-green-400": isCopied,
          "border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-gray-200/50 dark:border-gray-700 dark:hover:border-gray-400":
            !isCopied,
        }
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("pointer-events-none h-4 w-4", {
          "text-gray-400 dark:text-gray-400": !isCopied,
          "text-green-400": isCopied,
        })}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          className={clsx({ block: !isCopied, hidden: isCopied })}
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          className={clsx({ block: isCopied, hidden: !isCopied })}
        />
      </svg>
    </button>
  );
};
