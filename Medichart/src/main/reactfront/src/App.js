import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Translate from "./components/translate";
import Admin from "./components/admin";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
