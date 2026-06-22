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

  return (
    <section className="pcontainer">
      <h1>Password Generator</h1>
      <TextBox />
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
      <ButtonInput />
    </section>
  );
};

export { ParentContainer };
