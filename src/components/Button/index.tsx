import React from "react";
import "./style.scss";

type PropsType = {
  text: string;
  type: "outlined" | "primary";
  onClick: () => void;
};

const Button = ({ text, type, onClick }: PropsType): JSX.Element => {
  return (
    <div className={`button button--type-${type}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
