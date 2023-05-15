import { FC } from "react";

interface ButtonProps {
  text: string;
  color: string;
  size: string;
}

const Button: FC<ButtonProps> = ({ text, color, size }) => {
  return <button className="button">{text}</button>;
};

export default Button;
