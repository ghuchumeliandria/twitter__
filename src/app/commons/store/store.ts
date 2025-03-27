import { create } from "zustand";

type Visibility = {
  SignIn: boolean;
  CreateAcc: boolean;
  AuthorizationBox: boolean;
  SignInNext: boolean;
  SignInVisibility: () => void;
  CloseBtn: () => void;
  CreateAccVisibility: () => void;
  SignInNextVisibility: () => void;
};

// Authorization

export const useVisibility = create<Visibility>((set) => ({
  AuthorizationBox: false,
  CreateAcc: false,
  SignIn: false,
  SignInNext: false,

  SignInVisibility: () => {
    set(() => ({
      AuthorizationBox: true,
      SignIn: true,
      CreateAcc: false,
      SignInNext: false,
    }));
  },

  CloseBtn: () => {
    set(() => ({
      AuthorizationBox: false,
    }));
  },

  CreateAccVisibility: () => {
    set(() => ({
      AuthorizationBox: true,
      SignIn: false,
      CreateAcc: true,
    }));
  },
  SignInNextVisibility: () => {
    set(() => ({
      SignInNext: true,
    }));
  },
}));
