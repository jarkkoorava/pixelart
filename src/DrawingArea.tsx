import React, { RefObject } from "react";

interface color {
  id: string | null;
  hex: string;
  name: string;
}
interface props {
  selectedColor: color;
  canvasRef: RefObject<HTMLCanvasElement>;
  onMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onMouseUp: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  onMouseLeave: () => void;
}

const DrawingArea = ({
  canvasRef,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onMouseLeave,
}: props) => {
  return (
    <div className="drawing-area">
      <h2>Drawing area</h2>
      <div className="drawing-area-canvas-container">
        <div className="drawing-area-canvas">
          <canvas className="canvas"
            ref={canvasRef}
            width={16}
            height={16}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawingArea;
