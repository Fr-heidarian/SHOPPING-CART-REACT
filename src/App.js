import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";

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
