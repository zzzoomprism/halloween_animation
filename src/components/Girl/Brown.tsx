import { useEffect } from "react";
import useButtonListiner from "./../../hooks/useButtonListiner";
import "./style.scss";
import { ANIMATION_DUR, KEY_TIMELINE } from "./../../constants/animations";

const LEFT_BROWN = {
  FROM:
    "M 185 172 C 193 180 212 180 220 171 C 222 169 218 165 216 167 C 210 173 194 173 188 167 C 186 165 182 169 185 172",
  TO:
    "M 206 172 C 206 177 217 177 217 172 C 217 172 217 172 217 172 C 217 167 206 167 206 172 C 206 172 206 172 206 172"
};

const RIGHT_BROWN = {
  FROM:
    "M 295 172 C 303 180 322 180 330 171 C 332 169 328 165 326 167 C 320 173 304 173 298 167 C 296 165 292 169 295 172",
  TO:
    "M 286 172 C 286 177 297 177 297 172 C 297 172 297 172 297 172 C 297 167 286 167 286 172 C 286 172 286 172 286 172"
};

const BROWNS = [LEFT_BROWN, RIGHT_BROWN];

const Brown = (): JSX.Element => {
  const { isPressed } = useButtonListiner();
  console.log(isPressed);
  useEffect(() => {
    if (isPressed) {
      BROWNS.forEach((_, index) => {
        const brown: any = document.getElementById(`brown-id-${index}`);
        if (brown && brown.beginElement) brown.beginElement();
      });
    }
  }, [isPressed]);
  return (
    <>
      {BROWNS.map((el, index) => (
        <path
          key={`brown_element-${index}`}
          className={`brown_rotate brown_rotate--${index}`}
          fill="none"
          stroke="black"
          strokeWidth="10"
          d={el.TO}
        >
          <animate
            attributeName="d"
            id={`brown-id-${index}`}
            values={`${el.TO}; ${el.TO}; ${el.FROM};${el.FROM};${el.FROM}; ${el.TO};`}
            keyTimes={KEY_TIMELINE}
            fill="freeze"
            dur={ANIMATION_DUR}
            begin="click"
            repeatCount="1"
          />
        </path>
      ))}
    </>
  );
};

export default Brown;
