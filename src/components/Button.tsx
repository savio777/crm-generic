import { type HTMLAttributes } from "react";

type IButtonProps = {
  text: string;
  variant?: IVariantTheme;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ text, variant, className, ...rest }: IButtonProps) {
  const bgColor = variant || "primary";

  return (
    <button
      className={`flex items-center justify-center rounded-sm w-100 h-10 bg-${bgColor} border-2 border-transparent ${
        className || ""
      }`}
      {...rest}
    >
      <span className="text-center font-bold text-sm text-white">{text}</span>
    </button>
  );
}
