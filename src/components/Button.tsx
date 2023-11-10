import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
