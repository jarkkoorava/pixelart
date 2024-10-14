import ColorPicker from "./ColorPicker"

interface color {
  id: string | null;
  hex: string;
  name: string;
}

interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
}

const Toolbar = ({selectedColor, changeSelectedColor}: props) => {
  return (
    <>
      <div className="toolbar">
        <h2 className="toolbar-header">
          Toolbar
        </h2>
        <ColorPicker selectedColor={selectedColor} changeSelectedColor={changeSelectedColor}/>
        </div>
    </>
  )
}

export default Toolbar