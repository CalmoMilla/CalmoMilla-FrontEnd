// components/GoogleLoginButton.jsx
"use client";

import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />;
}

export default GoogleLoginButton;
