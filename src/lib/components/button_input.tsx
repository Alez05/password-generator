import "../styles/button_input.css";
import { TButton } from "./type";

const ButtonInput = ({ generatePassword }: TButton) => {
  return (
    <div>
      <button type="submit" onClick={generatePassword} className="bbutton">
        Generate
        <span>
          <img
            src="/assets/images/icon-arrow-right.svg"
            alt="arrow right"
          />
        </span>
      </button>
    </div>
  );
};

export { ButtonInput };
