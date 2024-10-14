interface color {
  id: string | null;
  hex: string;
  name: string;
}

interface props {
  selectedColor: color;
}

const SelectedColorDisplay = ({ selectedColor }: props) => {
  return (
    <>
      <p>{selectedColor.name}</p>
      <div className="selected-color-container">
        <div
          className="selected-color"
          style={{ backgroundColor: selectedColor.hex }}
        ></div>
      </div>
    </>
  );
};

export default SelectedColorDisplay;
