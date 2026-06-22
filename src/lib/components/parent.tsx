"use client";
import { useState } from "react";
import { ButtonInput } from "./button_input";
import { CheckBoxInput } from "./checkbox_input";
import { RangeInput } from "./range_input";
import { StrengthMeter } from "./strength_meter";
import { TextBox } from "./textbox_input";
import "../styles/parent.css";

const ParentContainer = () => {
  const [passwordLength, setPasswordLength] = useState(8);

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [password, setPassword] = useState("");

  const generatePassword = () => {
    console.log(passwordLength);
    console.log(uppercase);
    console.log(lowercase);
    console.log(numbers);
    console.log(symbols);

    let characters = "";

    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers) {
      characters += "0123456789";
    }

    if (symbols) {
      characters += "!@£$%^&*";
    }

    if (characters.length === 0) {
      return;
    }

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);

    console.log(newPassword, "password");
  };

  return (
    <section className="pcontainer">
      <h1>Password Generator</h1>
      <TextBox  password={password}/>
      <RangeInput
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <CheckBoxInput
        uppercase={uppercase}
        setUppercase={setUppercase}
        lowercase={lowercase}
        setLowercase={setLowercase}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <StrengthMeter />
      <ButtonInput generatePassword={generatePassword} />
    </section>
  );
};

export { ParentContainer };
