import "../styles/button_input.css";
import { TButton } from "./type";

const ButtonInput = ({ generatePassword }: TButton) => {
  return (
    <div className="bcontainer">
      <button type="submit" onClick={generatePassword} className="bbutton">
        Generate
        <span className="barrowrapper">
          <img
            src="/assets/images/icon-arrow-right.svg"
            alt="arrow right"
            className="barrow"
          />
        </span>
      </button>
    </div>
  );
};

export { ButtonInput };
