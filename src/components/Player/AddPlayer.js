import React from "react";
import {
  areColorsSimilar,
  BACKGROUND_GROUP_COLOR,
  increaseColorTone,
  isColorLight,
} from "src/ultis/ColorChecking";

const AddPlayer = ({ setPlayers = function () {} }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getStyle = () => {
    const color = getRandomColor(); // Assume you have a function to get a random color
    const isLight = isColorLight(color);
    const checkSimilar = areColorsSimilar(BACKGROUND_GROUP_COLOR, color);

    const handleColor = checkSimilar
      ? increaseColorTone(color, 20)
      : getRandomColor();

    return {
      bgColor: {
        backgroundColor: handleColor,
      },
      textColor: {
        filter: isLight
          ? "brightness(0%) invert(0%)"
          : "brightness(0%) invert(100%)",
      },
    };
  };

  return (
    <div
      className={`w-10 h-10 max-md:w-8 max-md:h-8 rounded-3xl text-center flex items-center justify-center p-2 cursor-pointer`}
      style={getStyle().bgColor}
    >
      <img
        src={"/icons/addicon2.svg"}
        alt={"svg"}
        width={24}
        height={24}
        style={getStyle().textColor}
      />
    </div>
  );
};

export default AddPlayer;
