import "./App.css";
import Content from "./Content";
import Header from "./Header";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;
