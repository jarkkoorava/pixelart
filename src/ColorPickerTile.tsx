interface color {
  id: string | null;
  hex: string;
  name: string;
}

interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
}

const ColorPickerTile = ({selectedColor, changeSelectedColor}: props) => {

  const handleClick = () => {
    changeSelectedColor({
      id: selectedColor.id,
      hex: selectedColor.hex,
      name: selectedColor.name
      }
    );
  }

  return (
    <div
      className="color-picker-color"
      style={{ backgroundColor: selectedColor.hex }}
      onClick={handleClick}
  ></div>
  )
}

export default ColorPickerTile