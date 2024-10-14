import DrawingArea from "./DrawingArea";
import Toolbar from "./Toolbar";

import React, { RefObject } from "react";

interface color {
  id: string | null;
  hex: string;
  name: string;
}
interface props {
  selectedColor: color;
  changeSelectedColor: (newColor: color) => void;
  canvasRef: RefObject<HTMLCanvasElement>;
  onMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onMouseUp: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onMouseLeave: () => void;
  resetCanvas: () => void;
}

const Content = ({
  selectedColor,
  changeSelectedColor,
  canvasRef,
  onMouseUp,
  onMouseDown,
  onMouseMove,
  onMouseLeave,
  resetCanvas
}: props) => {
  return (
    <div className="content">
      <DrawingArea
        selectedColor={selectedColor}
        canvasRef={canvasRef}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      />
      <Toolbar
        selectedColor={selectedColor}
        changeSelectedColor={changeSelectedColor}
        resetCanvas={resetCanvas}
      />
    </div>
  );
};

export default Content;
