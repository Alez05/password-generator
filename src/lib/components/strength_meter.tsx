import "../styles/strength_meter.css";

const StrengthMeter = () => {
  return (
    <div className="strength-meter">
      <span className="strength-label">STRENGTH</span>

      <div className="strength-result">
        <span className="strength-level">MEDIUM</span>

        <div className="strength-bars">
          <div className="bar active"></div>

          <div className="bar active"></div>

          <div className="bar active"></div>

          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export { StrengthMeter };
