import React from "react";

const user = [{ name: "Me" }];

const FirstSecondThird = () => {
  return (
    <div
      className={
        "w-full max-w-[500px] h-full shadow shadow-card-shadow-color rounded-md px-7 py-4 m-auto"
      }
    >
      <div className={"text-2xl font-bold text-center mb-8"}>
        Nhất Nhì Ba Bét
      </div>
      <div className={"grid grid-cols-2 gap-y-6"}>
        <div className={"font-bold text-xl text-center"}>Tên</div>
        <div className={"font-bold text-xl text-center"}></div>
        {user.map((item) => {
          return [
            <div className={"font-semibold text-xl"}>{item.name}</div>,
            <div className={"font-bold text-xl text-center"}></div>,
          ];
        })}
      </div>
    </div>
  );
};

export default FirstSecondThird;
