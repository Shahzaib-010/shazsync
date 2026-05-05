import React from "react";

type ButtonProps = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  text = "Click Me",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-full ${bgColor} ${textColor} font-medium overflow-hidden`}
    >
      {/* Pulse Dot */}
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
        
      </span>

      {/* Button Text */}
      {text}
    </button>
  );
};

export default Button;
