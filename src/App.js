import "./App.css";
import Basket from "./Components/Basket.js";
import Header from "./Components/Header";
import Main from "./Components/Main";
import data from "./data.js";

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </>
  );
}

export default App;
