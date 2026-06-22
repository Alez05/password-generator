import { Dispatch, SetStateAction } from "react";

export type TRange = {
  passwordLength: string | number;
  setPasswordLength: Dispatch<SetStateAction<number>>;
};


export type TCheckbox = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;

  setUppercase: Dispatch<SetStateAction<boolean>>;
  setLowercase: Dispatch<SetStateAction<boolean>>;
  setNumbers: Dispatch<SetStateAction<boolean>>;
  setSymbols: Dispatch<SetStateAction<boolean>>;
};


export type TButton = {
  generatePassword: () => void;
}


export type TText = {
  password: string;
}
