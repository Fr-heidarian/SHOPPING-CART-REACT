import "./App.css";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Basket from "./Components/Basket.js";
import { useSelector } from "react-redux";
import Modal from "./Components/Modal.js";

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Header />
      <div className="row page_content">
        <Basket />
        <Main />

        {isOpen && <Modal />}
      </div>
    </>
  );
}

export default App;
