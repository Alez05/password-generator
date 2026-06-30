"use client";
import { useState } from "react";
import {
  ButtonInput,
  CheckBoxInput,
  RangeInput,
  StrengthMeter,
  TextBox,
} from "./index";
import "../styles/parent.css";
import {
  buildCharacterPool,
  calculatePasswordScore,
  calculatePasswordStrength,
  generatePassword,
} from "./helpers";

const ParentContainer = () => {
  const [passwordLength, setPasswordLength] = useState(8);

  const [settings, setSettings] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const [password, setPassword] = useState("");

  const [strength, setStrength] = useState("");
  const [strengthLevel, setStrengthLevel] = useState(0);

  const handleGeneratePassword = () => {
    const characters = buildCharacterPool(settings);
    const newPassword = generatePassword(passwordLength, characters);
    const passwordScore = calculatePasswordScore(newPassword);
    const { strength, level } = calculatePasswordStrength(passwordScore);

    setPassword(newPassword);
    setStrength(strength);
    setStrengthLevel(level);
  };

  return (
    <section className="pcontainer">
      <h1>Password Generator</h1>
      <TextBox password={password} />
      <RangeInput
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <CheckBoxInput settings={settings} setSettings={setSettings} />
      <StrengthMeter score={strengthLevel} strength={strength} />
      <ButtonInput generatePassword={handleGeneratePassword} />
    </section>
  );
};

export { ParentContainer };
