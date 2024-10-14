import colorPalette from "./colorPalette";
import ColorPickerTile from "./ColorPickerTile";
import SelectedColorDisplay from "./SelectedColorDisplay";

interface color {
  id: string | null;
  hex: string;
  name: string;
}

interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
}

const ColorPicker = ({selectedColor, changeSelectedColor}: props) => {
  const colorsToRender = colorPalette.map((individualColor) => {
    return (
      <ColorPickerTile
        key={individualColor.id}
        selectedColor={individualColor}
        changeSelectedColor={changeSelectedColor}
    ></ColorPickerTile>
    );
  });

  return (
    <>
      <h3>Selected color</h3>
      <SelectedColorDisplay selectedColor={selectedColor} />
      <h3>Select a color</h3>
      <div className="color-picker">{colorsToRender}</div>
    </>
  );
};

export default ColorPicker;
