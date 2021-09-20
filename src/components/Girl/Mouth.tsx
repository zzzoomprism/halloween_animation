import { useEffect } from "react";
import useButtonListiner from "./../../hooks/useButtonListiner";
import { ANIMATION_DUR, KEY_TIMELINE } from "./../../constants/animations";

const MOUTH_POSITION = {
  FROM: "M 225 285 C 225 310 280 310 280 285 C 225 285 280 285 225 285",
  TO: "M 225 290 C 225 335 285 335 285 291 C 285 240 225 240 225 290"
};

const MOUTH_COLORS = {
  DEFAULT: "white",
  RED: "#da4a54"
};

const ANIMATIONS_VALUES = `${MOUTH_POSITION.FROM}; ${MOUTH_POSITION.FROM}; ${MOUTH_POSITION.TO};${MOUTH_POSITION.TO};${MOUTH_POSITION.TO}; ${MOUTH_POSITION.FROM}`;
const ANIMATION_COLOR_VALUES = `${MOUTH_COLORS.DEFAULT}; ${MOUTH_COLORS.DEFAULT}; ${MOUTH_COLORS.RED};${MOUTH_COLORS.RED};${MOUTH_COLORS.RED}; ${MOUTH_COLORS.DEFAULT};`;

const Mouth = () => {
  const { isPressed } = useButtonListiner();
  useEffect(() => {
    if (isPressed) {
      const animations: any = [
        document.getElementById("mouth-d-animation"),
        document.getElementById("mouth-color-animation")
      ];
      animations.forEach((el: any) => {
        if (el && el.beginElement) el.beginElement();
      });
    }
  }, [isPressed]);
  return (
    <>
      <path
        stroke="black"
        strokeWidth="10"
        fill={MOUTH_COLORS.DEFAULT}
        d={MOUTH_POSITION.FROM}
      >
        <animate
          id="mouth-d-animation"
          repeatCount="1"
          attributeName="d"
          keyTimes={KEY_TIMELINE}
          values={ANIMATIONS_VALUES}
          dur={ANIMATION_DUR}
          fill="freeze"
          begin="click"
        />
        <animate
          id="mouth-color-animation"
          repeatCount="1"
          attributeName="fill"
          values={ANIMATION_COLOR_VALUES}
          keyTimes={KEY_TIMELINE}
          fill="freeze"
          dur={ANIMATION_DUR}
          begin="click"
        />
      </path>
    </>
  );
};

export default Mouth;
