import "../styles/checkbox.css";
import { TCheckbox } from "./type";

const CheckBoxInput = ({ setSettings, settings }: TCheckbox) => {
  return (
    <div className="cbcontainer">
      <div className="cbwrapper">
        <div className="cbcontent">
          <input
            type="checkbox"
            id="uppercase"
            className="cbcheck"
            checked={settings.uppercase}
            onChange={() =>
              setSettings((prev) => ({
                ...prev,
                uppercase: !prev.uppercase,
              }))
            }
          />

          <label htmlFor="uppercase" className="cbtext">
            Include Uppercase Letters
          </label>
        </div>

        <div className="cbcontent">
          <input
            type="checkbox"
            id="lowercase"
            className="cbcheck"
            checked={settings.lowercase}
            onChange={() =>
              setSettings((prev) => ({
                ...prev,
                lowercase: !prev.lowercase,
              }))
            }
          />

          <label htmlFor="lowercase" className="cbtext">
            Include Lowercase Letters
          </label>
        </div>

        <div className="cbcontent">
          <input
            type="checkbox"
            id="numbers"
            className="cbcheck"
            checked={settings.numbers}
            onChange={() =>
              setSettings((prev) => ({
                ...prev,
                numbers: !prev.numbers,
              }))
            }
          />

          <label htmlFor="numbers" className="cbtext">
            Include Numbers
          </label>
        </div>

        <div className="cbcontent">
          <input
            type="checkbox"
            id="symbols"
            className="cbcheck"
            checked={settings.symbols}
            onChange={() =>
              setSettings((prev) => ({
                ...prev,
                symbols: !prev.symbols,
              }))
            }
          />

          <label htmlFor="symbols" className="cbtext">
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
};

export { CheckBoxInput };
