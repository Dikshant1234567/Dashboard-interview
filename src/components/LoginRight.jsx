import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function LoginRight() {
  const navagate = useNavigate();
  const authStyle =
    "border px-4 py-2  bg-white rounded-2xl text-xs text-gray-600 flex cursor-pointer";
  const inputstyle =
    "border-white outline-none text-sm font-medium rounded-lg py-1 bg-slate-200 px-3 my-2 w-full";
  const InputLabelstyle = "text-base font-medium";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (email, password) => {
    if (!email || !password) {
      setError("Please fill the input");
      navagate("/");
    } else {
      navagate("/dashboard");
    }
  };
  const handlerGoogleLogin = (crd) => {
    navagate("/dashboard");
  };
  const handlerGoogleError = (crd) => {
    setError("Error in authentication");
  };
  return (
    <div className="h-max p-10  w-max form-box">
      <div>
        <h2 className="text-4xl font-bold">Sign In</h2>
        <p className="text-sm my-2 font-medium">Sign in to your account</p>
      </div>
      <div className="my-6 flex auth-container ">
        <div className={` w-max`}>
          <GoogleLogin className="w-full"
          width={"100%"}
            onSuccess={handlerGoogleLogin}
            onError={handlerGoogleError}
          />
          
        </div>
        <div className={`${authStyle} ml-10 w-max  `}>
          <img
            className="w-4 mr-2"
            src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202306260616"
            alt="apple"
          />
          <p>Sign in with Apple</p>
        </div>
      </div>
      <div className="bg-white p-5 flex items-start flex-col my-6 rounded-xl">
        {error && (
          <p className="text-red-600 font-medium text-sm text-center m-auto">
            {error}
          </p>
        )}
        <label className={InputLabelstyle} htmlFor="email">
          Email address
        </label>
        <input
          onChange={emailHandler}
          value={email}
          className={inputstyle}
          type="text"
          name="email"
          id="email"
        />
        <label className={InputLabelstyle} htmlFor="password">
          Password
        </label>
        <input
          className={inputstyle}
          type="password"
          name="password"
          id="password"
          onChange={passwordHandler}
          value={password}
        />
        <p>
          <a
            href="#"
            className="font-medium my-1 tracking-wider text-blue-900 text-sm cursor-pointer"
          >
            Forget password?
          </a>
        </p>

        <button
          className="w-full bg-black text-center py-2 text-white my-5 rounded-2xl cursor-pointer"
          onClick={() => submitHandler(email, password)}
        >
          Sign In
        </button>
      </div>
      <p className="m-auto text-center font-normal text-gray-500">
        Don't have an account?
        <span className="text-blue-900 cursor-pointer"> Register here </span>
      </p>
    </div>
  );
}

export default LoginRight;
