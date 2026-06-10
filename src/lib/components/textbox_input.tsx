import "../styles/textbox_input.css";

const TextBox = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="fname">Text Field</label><br />
        <input type="text" id="fname" name="fname" className="fname" />
      </form>
    </div>
  );
};

export { TextBox };
