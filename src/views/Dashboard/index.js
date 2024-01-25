import React from "react";
import AppLogin from "src/components/Auth/Login/index";
import AppRegister from "src/components/Auth/Register/index";
import ListGame from "src/components/Games/ListGame";

const Dashboard = () => {
  return (
    <div>
      dashboard
      <ListGame />
      <div>
        <AppLogin />
        <AppRegister />
      </div>
    </div>
  );
};

export default Dashboard;
