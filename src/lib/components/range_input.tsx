const RangeInput = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="frange">Range 1-10</label><br />
        <input
          type="range"
          id="frange"
          min={0}
          max={15}
          name="frange"
          className="frange"
        />
      </form>
    </div>
  );
};

export { RangeInput };
