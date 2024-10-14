import DrawingArea from "./DrawingArea";
import Toolbar from "./Toolbar";

interface color {
  id: string | null;
  hex: string;
  name: string;
}
interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
}

const Content = ({selectedColor, changeSelectedColor}: props) => {
  return (
    <div className="content">
      <DrawingArea/>
      <Toolbar selectedColor={selectedColor} changeSelectedColor={changeSelectedColor}/>
    </div>
  )
}

export default Content