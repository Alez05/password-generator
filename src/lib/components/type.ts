import { Dispatch, SetStateAction } from "react";

export type TRange = {
  passwordLength: string | number;
  setPasswordLength: Dispatch<SetStateAction<number>>;
};


export type TSettings = {
    uppercase: boolean;
    lowercase:boolean;
    numbers: boolean;
    symbols: boolean;
}

export type TCheckbox = {
  settings: TSettings
  setSettings: Dispatch<SetStateAction<TSettings>>;
};

export type TButton = {
  generatePassword: () => void;
};

export type TText = {
  password: string;
};

export type TStrength = {
  score: number;
  strength: string;
};
