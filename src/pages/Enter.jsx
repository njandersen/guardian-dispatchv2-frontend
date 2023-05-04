import { useState } from "react";
import Login from "../components/util/Login";
import Signup from "../components/util/SignUp";

export default function Enter() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showLogin ? <Login /> : <Signup />}
      <div className="mt-4 flex">
        <button
          className="mx-2 px-4 py-2 rounded bg-yellow-500 text-white font-bold"
          onClick={handleLoginClick}
          style={{ display: showLogin ? "none" : "block" }}
        >
          Login
        </button>
        <button
          className="mx-2 px-4 py-2 rounded bg-yellow-500 text-white font-bold"
          onClick={handleSignupClick}
          style={{ display: !showLogin ? "none" : "block" }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
