import "../styles/checkbox.css";
import { TCheckbox } from "./type";

const CheckBoxInput = ({
  lowercase,
  numbers,
  symbols,
  uppercase,
  setLowercase,
  setNumbers,
  setSymbols,
  setUppercase,
}: TCheckbox) => {

  return (
    <div>
      <h1>Checkbox</h1>
      <form action="">
        <input type="checkbox" id="uppercase" name="" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
        <br />

        <input type="checkbox" id="lowercase" name="" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
        <br />

        <input type="checkbox" id="numbers" name="" checked={numbers} onChange={() => setNumbers(!numbers)} />
        <label htmlFor="numbers">Include Numbers</label>
        <br />

        <input type="checkbox" id="symbols" name="" checked={symbols} onChange={() => setSymbols(!symbols)} />
        <label htmlFor="symbols">Include Symbols</label>
      </form>
    </div>
  );
};

export { CheckBoxInput };
