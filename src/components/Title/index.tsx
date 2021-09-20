import React from "react";
import "./style.scss";

type PropsType = {
  size: string;
  text: string;
};

const Title = ({ size, text }: PropsType) => {
  switch (size) {
    case "h2":
      return <h2 className="title">{text}</h2>;
    case "h1":
      return <h1>{text}</h1>;
    default:
      return <div>{text}</div>;
  }
};

export default Title;
