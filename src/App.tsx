import "./App.css";
import Content from "./Content";
import Header from "./Header";
import { useState, useRef } from "react";

interface color {
  id: string | null;
  hex: string;
  name: string;
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState<color>({
    id: null, 
    hex: "#000000",
    name: "Black"
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const onMouseLeave = () => {
    // No functionality for this yet, currently I don't want the drawing 
    // to stop when user leaves the boundaries of canvas.
  }

  
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const pixelX = Math.floor(x / 20);
    const pixelY = Math.floor(y / 20);
    
    ctx.fillStyle = selectedColor.hex;
    ctx.fillRect(pixelX, pixelY, 1, 1);
  };
  
  const changeSelectedColor = (newColor: color) => {
    setSelectedColor(newColor);
  }
  
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Content 
          selectedColor={selectedColor} 
          changeSelectedColor={changeSelectedColor}
          canvasRef={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={onMouseLeave}
          resetCanvas={resetCanvas}
          
          />
      </div>
    </div>
  );
};

export default App;
