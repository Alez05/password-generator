import "../styles/strength_meter.css";
import { TStrength } from "./type";

const StrengthMeter = ({ score, strength}: TStrength) => {
  return (
    <div className="strength-meter">
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={bar <= score ? "bar active" : "bar"}
        />
      ))}
      <span>{strength}</span>
    </div>
  );
};

export { StrengthMeter };
