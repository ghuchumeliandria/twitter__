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

type createAccount = {
  name: string;
  email: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

type ImgUpload = {
  imgUrl: string;
  img: string;
  setImgUrl: (url: string) => void;
  setImg: (src: string) => void;
};
export const useImgUpload = create<ImgUpload>((set) => ({
  img: "",
  imgUrl: "",
  setImg: (src) => set({ img: src }),
  setImgUrl: (url) => set({ imgUrl: url }),
}));

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

export const useCreateAccount = create<createAccount>((set) => ({
  email: "",
  name: "",
  password: "",
  setPassword: (password) => set({ password }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
}));
