const CheckBoxInput = () => {
  return (
    <div>
      <h1>Checkbox</h1>
      <form action="">
        <input type="checkbox" id="check1" name="" />
        <label htmlFor="check1">Include Uppercase Letters</label>
        <br />

        <input type="checkbox" id="check2" name="" />
        <label htmlFor="check2">Include Lowercase Letters</label>
        <br />

        <input type="checkbox" id="check3" name="" />
        <label htmlFor="check3">Include Numbers</label>
        <br />

        <input type="checkbox" id="check4" name="" />
        <label htmlFor="check4">Include Symbols</label>
      </form>
    </div>
  );
};

export { CheckBoxInput };
