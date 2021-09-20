import { useEffect, useState } from "react";

let isPressed = false;

const useButtonListiner = () => {
  const [, update] = useState(0);

  const press = () => {
    isPressed = true;
    update(1);
  };

  useEffect(() => {
    if (isPressed) {
      setTimeout(() => {
        isPressed = false;
        update(0);
      }, 3000);
    }
  });
  return { isPressed, press };
};

export default useButtonListiner;
