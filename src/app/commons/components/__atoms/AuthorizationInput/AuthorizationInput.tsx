import React from "react";

type inputProps = {
  placeholder: string;
  className: string;
  type: string;
  value?: string;
  Change: (value: string) => void;
};

function AuthorizationInput({
  placeholder,
  className,
  type,
  value,
  Change,
}: inputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={(e) =>  Change(e.target.value)}
      />
    </>
  );
}

export default AuthorizationInput;
