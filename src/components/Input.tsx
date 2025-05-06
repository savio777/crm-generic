import type { InputHTMLAttributes } from "react";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`p-3 rounded-sm border w-100 text-gray-800 placeholder-gray-400 border-gray-400 ${
        className || ""
      }`}
      {...props}
    />
  );
}
