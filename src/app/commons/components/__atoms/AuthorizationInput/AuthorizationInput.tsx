import React from "react";

type inputProps = {
  placeholder: string;
  className: string;
  type: string;
};

function AuthorizationInput({ placeholder, className, type }: inputProps) {
  return (
    <>
      <input type={type} placeholder={placeholder} className={className} />
    </>
  );
}

export default AuthorizationInput;
