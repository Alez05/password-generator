"use client";
import { ChangeEvent, useState } from "react";
import "../styles/range_input.css";
import { TRange } from "./type";

const RangeInput = ({ passwordLength, setPasswordLength }: TRange) => {
  return (
    <div className="rcontainer">
      <div className="rcounter">
        <h2 className="rtitle">Character length</h2>
        <p className="rvalue">{passwordLength}</p>
      </div>
      <input
        type="range"
        id="frange"
        min={0}
        max={20}
        value={passwordLength}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPasswordLength(Number(e.target.value))
        }
        name="frange"
        className="rslider"
      />
    </div>
  );
};

export { RangeInput };
