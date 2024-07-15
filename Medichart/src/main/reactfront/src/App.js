import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/layout";
import Home from "./pages/home";
import Translate from "./pages/translate";
import AdminMain from "./pages/AdminMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/translate" element={<Layout><Translate /></Layout>} />
      <Route path="/admin/main" element={<AdminLayout><AdminMain /></AdminLayout>} />
    </Routes>
  );
}

export default App;
