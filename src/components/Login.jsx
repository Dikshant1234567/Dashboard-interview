import React from "react";
import LoginRight from "./LoginRight";

function Login() {
  return (
    <div className="flex  h-screen login-container">
      <div className="w-1/3 bg-black  text-white grid place-items-center text-5xl font-bold  overflow-hidden board-heading">
        Board.
      </div>
      <div className="bg-slate-100 w-2/3 h-full flex items-center justify-center form-container">
        <LoginRight />
      </div>
    </div>
  );
}

export default Login;
