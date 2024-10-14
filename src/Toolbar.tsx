import ColorPicker from "./ColorPicker";
import ResetButton from "./ResetButton";

interface color {
  id: string | null;
  hex: string;
  name: string;
}

interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
  resetCanvas: () => void;
}

const Toolbar = ({
  selectedColor,
  changeSelectedColor,
  resetCanvas,
}: props) => {
  return (
    <>
      <div className="toolbar">
        <h2 className="toolbar-header">Toolbar</h2>
        <ColorPicker
          selectedColor={selectedColor}
          changeSelectedColor={changeSelectedColor}
        />
        <ResetButton resetCanvas={resetCanvas} />
      </div>
    </>
  );
};

export default Toolbar;
