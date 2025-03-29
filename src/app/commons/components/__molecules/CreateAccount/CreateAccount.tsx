import React from "react";
import CreateAccInput from "../../__atoms/CreateAccInput/CreateAccInput";
import { useState } from "react";
import CreateAppOptions from "../../__atoms/CreateAccOptons/CreateAccOptions";
function CreateAccount() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="w-full max-w-[438px] mx-auto">
        <div className="h-[76px]">
          <h1 className="text-white font-bold text-[31px]">
            Create your account
          </h1>
        </div>
        <form action="">
          <div className="flex flex-col gap-7 w-full">
            <CreateAccInput
              placeholder="Name"
              setInputValue={setInputValue}
              inputValue={`${inputValue.length} / 50`}
            />
            <CreateAccInput placeholder="Email" />
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <h3 className="text-white font-semibold">Date of birth</h3>
              <p className="text-textgray">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <div className="">
              <CreateAppOptions />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
