import colorPalette from "./colorPalette";

const ColorPicker = () => {
  const colorsToRender = colorPalette.map((color) => {
    return (
      <div
        key={color.id}
        className="color-picker-color"
        style={{ backgroundColor: color.hex }}
      ></div>
    );
  });

  return (
    <>
      <h3>Selected color</h3>
      <div className="selected-color-container">
        <div className="selected-color"></div>
      </div>
      <h3>Select a color</h3>
      <div className="color-picker">{colorsToRender}</div>
    </>
  );
};

export default ColorPicker;
