import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Korean from "./components/korean";
import Admin from "./components/admin";
import Header from "./Layouts/header"; // Header 컴포넌트를 추가

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Korean" element={<Korean />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
