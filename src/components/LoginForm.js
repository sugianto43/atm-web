import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [incorrectInput, setIncorrectInput] = useState(false);

  const togglePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <>
      <div className="login-form-container">
        <div className="welcome-text">
          <p className="first-line-text">Welcome to</p>
          <p className="second-line-text">Sistem Informasi ATM Business</p>
        </div>
        <div
          className={
            incorrectInput ? "input-style incorrect-style" : "input-style"
          }
        >
          <input type="text" placeholder="Username/email" />
          <i
            className="far fa-envelope"
            onClick={() => setIncorrectInput(!incorrectInput)}
          ></i>
        </div>
        {incorrectInput ? (
          <p className="incorrect-text">incorrect email</p>
        ) : null}
        {/* {passwordShow? '':<p>incorrect email</p>} */}
        <div
          className={
            incorrectInput ? "input-style incorrect-style" : "input-style"
          }
        >
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          {passwordValue ? (
            <i
              className={passwordShow ? "far fa-eye-slash" : "far  fa-eye"}
              onClick={togglePasswordShow}
            ></i>
          ) : (
            <i className="fas fa-lock"></i>
          )}
        </div>
        {incorrectInput ? (
          <p className="incorrect-text">incorrect email</p>
        ) : null}

        <div className="button-container">
          <p>Forgot Password</p>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
