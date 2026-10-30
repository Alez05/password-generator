import "../styles/strength_meter.css";
import { TStrength } from "./type";

const StrengthMeter = ({ score, strength, strengthClass }: TStrength) => {
  return (
    <div className="stcontainer">
      <div className={`strength-meter ${strengthClass}`}>
        <h2 className="sttitle">Strength</h2>

        <div className="strength-result">
          <span className="strength-level">{strength}</span>

          <div className="strength-bars">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={bar <= score ? "bar active" : "bar"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { StrengthMeter };
