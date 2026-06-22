"use client"
import "../styles/textbox_input.css";
import copyIcon from '../../../public/assets/images/icon-copy.svg'
import { TText } from "./type";

const TextBox = ({password}: TText) => {

  const copyToClipboard = () => {

    const copyText = document.getElementById("fname");

    const input = copyText as HTMLInputElement;
    input.select();
    input.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(input.value);
    alert("Copied the text:" + input.value);
  };


  return (
    <div>
      <form action="">
        <label htmlFor="fname">Text Field</label><br />
        <input type="text" id="fname" name="fname" className="fname" value={password} readOnly />

        <button className="tbbutton" onClick={copyToClipboard}><img src={copyIcon} alt="copy to clipboard" className="tbicon" /></button>
      </form>
    </div>
  );
};

export { TextBox };
