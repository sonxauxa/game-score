import React from "react";
import AppLogin from "src/components/Auth/Login/index";
import AppRegister from "src/components/Auth/Register/index";
import ListGame from "src/components/Games/ListGame";

const Dashboard = () => {
  return (
    <div className={"h-full flex flex-col"}>
      <div>
        dashboard
        <AppLogin />
        <AppRegister />
      </div>
      <ListGame />
    </div>
  );
};

export default Dashboard;
