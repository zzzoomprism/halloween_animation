import React from "react";
import FullSvg from "./components/Girl/FullSvg";
import Button from "./components/Button";
import "./global.scss";
import useButtonListiner from "./hooks/useButtonListiner";
import Clown from "./components/Clown";
import Bat from "./components/Bat";
import Title from "./components/Title";

export default function App() {
  const { isPressed, press } = useButtonListiner();

  return (
    <>
      <div className="container --flex_center">
        <div className="pictures_relative">
          <FullSvg />
          <Clown isVisible={isPressed} />
          <Bat />
        </div>
        <div className="--flex_self_center">
          <Title text="Happy Halloween" size="h2" />
          <div className="--mt_32">
            <Button text="Click Me!" type="primary" onClick={press} />
          </div>
        </div>
      </div>
    </>
  );
}
