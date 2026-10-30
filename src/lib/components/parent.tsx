"use client";
import { useState } from "react";
import {
  ButtonInput,
  CheckBoxInput,
  RangeInput,
  StrengthMeter,
  PasswordInput,
} from "./index";
import "../styles/parent.css";
import {
  buildCharacterPool,
  calculatePasswordScore,
  calculatePasswordStrength,
  generatePassword,
} from "./helpers";

const ParentContainer = () => {
  const [passwordLength, setPasswordLength] = useState(0);

  const [settings, setSettings] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const [password, setPassword] = useState("");

  const [strength, setStrength] = useState("");
  const [strengthLevel, setStrengthLevel] = useState(0);
  const [strengthClass, setStrengthClass] = useState("")

  const handleGeneratePassword = () => {
    const characters = buildCharacterPool(settings);
    if (!characters) {
      return;
    }

    const newPassword = generatePassword(passwordLength, characters);
    const passwordScore = calculatePasswordScore(newPassword);
    const { strength, level, extraClass } = calculatePasswordStrength(passwordScore);

    setPassword(newPassword);
    setStrength(strength);
    setStrengthLevel(level);
    setStrengthClass(extraClass);
  };

  return (
    <section className="pwrapper">
      <h1 className="ptitle">Password Generator</h1>
      <PasswordInput password={password} />
      <div className="pcontainer">
        <RangeInput
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <CheckBoxInput settings={settings} setSettings={setSettings} />
        <StrengthMeter score={strengthLevel} strength={strength} strengthClass={strengthClass}/>
        <ButtonInput generatePassword={handleGeneratePassword} />
      </div>
    </section>
  );
};

export { ParentContainer };
