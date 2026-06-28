"use client"
import { ChangeEvent, useState } from "react";
import "../styles/range_input.css";
import { TRange } from "./type";

const RangeInput = ({passwordLength, setPasswordLength}:TRange) => {

  return (
    <div className="rcontainer">
      <h2 className="rtitle">Character length</h2>
      <input
        type="range"
        id="frange"
        min={8}
        max={20}
        value={passwordLength}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordLength(Number(e.target.value))}
        name="frange"
        className="slider"
      />
      <p>
        Value: {passwordLength}
      </p>
    </div>
  );
};

export { RangeInput };
