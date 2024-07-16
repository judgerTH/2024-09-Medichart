import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/layout";
import Home from "./pages/home";
import Translate from "./pages/translate";
import AdminMain from "./pages/AdminMain";
import Korean from "./components/korean";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/translate"
        element={
          <Layout>
            <Translate />
          </Layout>
        }
      />
      <Route
        path="/admin/main"
        element={
          <AdminLayout>
            <AdminMain />
          </AdminLayout>
        }
      />
      <Route
        path="/Korean"
        element={
          <Layout>
            <Korean />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
