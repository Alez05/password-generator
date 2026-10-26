"use client";
import "../styles/textbox_input.css";
import copyIcon from "../../../public/assets/images/icon-copy.svg";
import { TText } from "./type";

const TextBox = ({ password }: TText) => {
  console.log(copyIcon);
  const copyToClipboard = () => {
    const copyText = document.getElementById("fname");

    const input = copyText as HTMLInputElement;
    input.select();
    input.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(input.value);
    alert("Copied the text:" + input.value);
  };

  return (
    <div className="tbparent">
      <form action="" className="tbwrapper">
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
          <button className="tbbutton" onClick={copyToClipboard}>
            <img src={copyIcon.src} alt="copy to clipboard" className="tbicon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export { TextBox };
