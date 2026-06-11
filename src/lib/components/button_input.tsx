import "../styles/button_input.css";

const ButtonInput = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="fbutton">
          Generate
          <span>
            <i>icon</i>
          </span>
        </label>
        <button type="submit" value="fbutton"/>
      </form>
    </div>
  );
};

export { ButtonInput };
