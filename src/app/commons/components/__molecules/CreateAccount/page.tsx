"use client";
import React from "react";
import CreateAccInput from "../../__atoms/CreateAccInput/CreateAccInput";
import { useState } from "react";
import CreateAppOptions from "../../__atoms/CreateAccOptons/CreateAccOptions";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/commons/firebase/firebase";
function CreateAccount() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 2025 - 1905 + 1 }, (_, i) => 2025 - i);
  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password,setPassword] = useState('')

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password  );
      console.log({res});
      setEmail("")
      setName("")
      setPassword("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full max-w-[438px] mx-auto">
        <div className="h-[76px]">
          <h1 className="text-white font-bold text-[31px]">
            Create your account
          </h1>
        </div>
        <form onSubmit={handleSignUp} className="flex flex-col gap-8">
          <div className="flex flex-col gap-7 w-full">
            <CreateAccInput
              type="password"
              placeholder="password"
              value={password}
              Change={setPassword}
            />
            <CreateAccInput
              type="email"
              placeholder="email"
              value={email}
              Change={setEmail}
            />
            <CreateAccInput
              type="text"
              placeholder="name"
              value={name}
              inputValue={`${name.length} / 50`}
              Change={setName}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="">
              <h3 className="text-white font-semibold">Date of birth</h3>
              <p className="text-textgray">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <div className="flex justify-between">
              <CreateAppOptions arr={months} className="max-w-[208px]" />
              <CreateAppOptions arr={days} className="max-w-[91px]" />
              <CreateAppOptions arr={years} className="max-w-[113px]" />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full h-14 bg-white rounded-[50px] font-bold text-[17px] hover:bg-[#ffffff94] ">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateAccount;
