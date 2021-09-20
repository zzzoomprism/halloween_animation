import { useEffect } from "react";
import useButtonListiner from "./../../hooks/useButtonListiner";
import { ANIMATION_DUR, KEY_TIMELINE } from "./../../constants/animations";

const LEFT_EYE_POSITION = {
  cx: "205",
  cy: "209"
};

const RIGHT_EYE_POSITION = {
  cx: "307",
  cy: "209"
};

const ELLIPSE_DEFAULT = {
  rx: 4,
  ry: 8
};

const KEY_TIMELINE_RY_VALUES = `${ELLIPSE_DEFAULT.ry}; ${ELLIPSE_DEFAULT.ry}; 18; 18; 18; ${ELLIPSE_DEFAULT.ry};`;
const KEY_TIMELINE_RX_VALUES = `${ELLIPSE_DEFAULT.rx}; ${ELLIPSE_DEFAULT.rx}; 20; 20; 20; ${ELLIPSE_DEFAULT.rx};`;

const EYES = [LEFT_EYE_POSITION, RIGHT_EYE_POSITION];

const Eyes = () => {
  const { isPressed } = useButtonListiner();
  useEffect(() => {
    if (isPressed) {
      EYES.forEach((_, index) => {
        const animations: any = [
          document.getElementById(`eye-content-id-rx-${index}`),
          document.getElementById(`eye-content-id-ry-${index}`)
        ];
        animations.forEach((el: any) => {
          if (el && el.beginElement) el.beginElement();
        });
      });
    }
  }, [isPressed]);

  return (
    <>
      {EYES.map((el, index) => (
        <ellipse
          key={`eye-content-${index}`}
          cx={el.cx}
          cy={el.cy}
          fill="white"
          stroke="black"
          strokeWidth="10"
          rx={ELLIPSE_DEFAULT.rx}
          ry={ELLIPSE_DEFAULT.ry}
        >
          <animate
            id={`eye-content-id-ry-${index}`}
            attributeName="ry"
            values={KEY_TIMELINE_RY_VALUES}
            keyTimes={KEY_TIMELINE}
            repeatCount="1"
            dur={ANIMATION_DUR}
            fill="freeze"
            begin="click"
          />
          <animate
            id={`eye-content-id-rx-${index}`}
            attributeName="rx"
            values={KEY_TIMELINE_RX_VALUES}
            keyTimes={KEY_TIMELINE}
            repeatCount="1"
            dur={ANIMATION_DUR}
            fill="freeze"
            begin="click"
          />
        </ellipse>
      ))}
    </>
  );
};

export default Eyes;
