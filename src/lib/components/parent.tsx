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

  const [strength, setStrength] = useState("");
  const [score, setScore] = useState(0);

  const [password, setPassword] = useState("");

  const [strengthLevel, setStrengthLevel] = useState(0);

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
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);

    let passwordScore = 0;

    if (newPassword.length >= 8) {
      passwordScore++;
    }

    if (newPassword.length >=12 ) {
      passwordScore++
    }

    if (newPassword.length >=16 ) {
      passwordScore++
    }

    if (newPassword.length >= 20) {
      passwordScore++
    }

    if (/[A-Z]/.test(newPassword)) {
      passwordScore++;
    }

    if (/[a-z]/.test(newPassword)) {
      passwordScore++;
    }

    if (/[0-9]/.test(newPassword)) {
      passwordScore++;
    }

    if (/[!@£$%^&*]/.test(newPassword)) {
      passwordScore++;
    }

    setScore(passwordScore);

    let passwordStrength = "";
    let strengthLevel = 0;

    if (passwordScore <= 2) {
      passwordStrength = "WEAK";
      strengthLevel = 1
    } else if (passwordScore <= 4) {
      passwordStrength = "MEDIUM";
      strengthLevel = 2
    } else if (passwordScore <=6 ) {
      passwordStrength = "STRONG";
      strengthLevel = 3
    } else {
      passwordStrength = "VERY STRONG";
      strengthLevel = 4
    }

    setStrengthLevel(strengthLevel);

    setStrength(passwordStrength);

    console.log(newPassword, "password");
  };

  return (
    <section className="pcontainer">
      <h1>Password Generator</h1>
      <TextBox password={password} />
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
      <StrengthMeter score={strengthLevel} strength={strength}/>
      <ButtonInput generatePassword={generatePassword} />
    </section>
  );
};

export { ParentContainer };
