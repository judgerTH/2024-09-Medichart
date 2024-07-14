import "./App.css";
import Home from "./components/home";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Translate from "./translate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </>
=======
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Translate from "./translate";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter> */}
    </div>
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
  );
}

export default App;
