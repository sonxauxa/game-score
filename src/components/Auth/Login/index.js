import React, { useState } from "react";
import AppModal from "src/components/App/AppModal";

const LoginForm = () => {
  return (
    <>
      <input
        className={"w-full border rounded-md my-1"}
        placeholder={"Enter Username"}
        type={"email"}
      />
      <input
        className={"w-full border rounded-md my-1"}
        placeholder={"Enter password"}
        type={"password"}
      />
      <button className={"w-full mt-2"}>Login</button>
    </>
  );
};

const AppLogin = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Login
      </button>
      <AppModal
        modalOpen={open}
        setModalOpen={setOpen}
        // ButtonGroup={ButtonLogin}
        closeAway
        content={<LoginForm />}
        header={"Login"}
        isCloseButton={false}
      />
    </div>
  );
};

export default AppLogin;
