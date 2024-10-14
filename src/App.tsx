import "./App.css";
import Content from "./Content";
import Header from "./Header";
import { useState } from "react";

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

  const changeSelectedColor = (newColor: color) => {
    setSelectedColor(newColor);
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Content selectedColor={selectedColor} changeSelectedColor={changeSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
