import { KeyboardEvent, useState } from "react";

export const useFocusIndex = (maxLength: number) => {
  const [focusIndex, setFocusIndex] = useState(-1);

  const changeFocusIndex = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      focusIndex >= maxLength - 1
        ? setFocusIndex(-1)
        : setFocusIndex((prev) => prev + 1);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault(); // 커서가 왼쪽으로 위치하는 것 방지
      focusIndex <= -1
        ? setFocusIndex(maxLength - 1)
        : setFocusIndex((prev) => prev - 1);
    }
  };

  return { changeFocusIndex, focusIndex, setFocusIndex };
};
