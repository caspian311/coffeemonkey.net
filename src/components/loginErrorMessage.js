import React from "react";
import "../css/loginErrorMessage.css";

function LoginErrorMessage(props) {
  return props.shouldShow && <h3 className="error">{props.message}</h3>;
}

export default LoginErrorMessage;
