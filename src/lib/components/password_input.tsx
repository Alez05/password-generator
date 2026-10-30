"use client";
import "../styles/password_input.css";
import copyIcon from "../../../public/assets/images/icon-copy.svg";
import { TText } from "./type";
import { useState } from "react";

const PasswordInput = ({ password }: TText) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const input = document.getElementById("fname") as HTMLInputElement;

    try {
      await navigator.clipboard.writeText(input.value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
  };

  return (
    <div className="tbparent">
      <div className="tbcontainer">
        <input
          type="text"
          id="fname"
          name="fname"
          className="fname"
          value={password}
          readOnly
          placeholder="P4$5W0rD!"
        />
        {copied && <span className="copied-message">COPIED</span>}
        <button className="tbbutton" onClick={copyToClipboard}>
          <img src={copyIcon.src} alt="copy to clipboard" className="tbicon" />
        </button>
      </div>
    </div>
  );
};

export { PasswordInput };
