import "./App.css";
import Home from "./components/home";
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
  );
}

export default App;
