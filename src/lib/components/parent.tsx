import "../styles/parent.css";
import { ButtonInput } from "./button_input";
import { CheckBoxInput } from "./checkbox_input";
import { RangeInput } from "./range_input";
import { StrengthMeter } from "./strength_meter";
import { TextBox } from "./textbox_input";

const ParentContainer = () => {
  return (
    <section className="pcontainer">
      <h1>Password Generator</h1>
      <TextBox />
      <RangeInput />
      <CheckBoxInput />
      <StrengthMeter />
      <ButtonInput />
    </section>
  );
};

export { ParentContainer };
