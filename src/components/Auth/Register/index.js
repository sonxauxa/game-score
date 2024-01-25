import React, { useState } from "react";
import AppModal from "src/components/App/AppModal";

const RegisterForm = () => {
  return (
    <>
      <input
        className={"w-full border rounded-md my-1"}
        placeholder={"Enter nickname"}
        type={"text"}
      />
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
      <button className={"w-full mt-2"}>Sign up</button>
    </>
  );
};

const AppRegister = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Sign Up
      </button>
      <AppModal
        modalOpen={open}
        setModalOpen={setOpen}
        // ButtonGroup={ButtonLogin}
        closeAway
        content={<RegisterForm />}
        header={"Login"}
        isCloseButton={false}
      />
    </div>
  );
};

export default AppRegister;
