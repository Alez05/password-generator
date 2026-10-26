"use client";
import { ChangeEvent, useState } from "react";
import "../styles/range_input.css";
import { TRange } from "./type";

const RangeInput = ({ passwordLength, setPasswordLength }: TRange) => {
  const min = 1;
  const max = 20;
  const progress = ((Number(passwordLength) - min) / (max - min)) * 100;

  return (
    <div className="rcontainer">
      <div className="rcounter">
        <h2 className="rtitle">Character length</h2>
        <p className="rvalue">{passwordLength}</p>
      </div>
      <input
        type="range"
        id="frange"
        min={min}
        max={max}
        value={passwordLength}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPasswordLength(Number(e.target.value))
        }
        name="frange"
        className="rslider"
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      />
    </div>
  );
};

export { RangeInput };
