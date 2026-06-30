import "../styles/checkbox.css";
import { TCheckbox } from "./type";

const CheckBoxInput = ({
  setSettings, settings
}: TCheckbox) => {

  return (
    <div>
      <h1>Checkbox</h1>
      <form action="">
        <input type="checkbox" id="uppercase" name="" checked={settings.uppercase} onChange={() => setSettings({...settings, uppercase: !settings.uppercase})} />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
        <br />

        <input type="checkbox" id="lowercase" name="" checked={settings.lowercase} onChange={() => setSettings({...settings, lowercase: !settings.lowercase})} />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
        <br />

        <input type="checkbox" id="numbers" name="" checked={settings.numbers} onChange={() => setSettings({...settings, numbers: !settings.numbers})} />
        <label htmlFor="numbers">Include Numbers</label>
        <br />

        <input type="checkbox" id="symbols" name="" checked={settings.symbols} onChange={() => setSettings({...settings, symbols: !settings.symbols})} />
        <label htmlFor="symbols">Include Symbols</label>
      </form>
    </div>
  );
};

export { CheckBoxInput };
