import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/layout";
import Home from "./pages/home";
import AdminMain from "./pages/AdminMain";
import Korean from "./pages/korean";
import Login from "./pages/login";
import Signup from "./pages/signup";

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
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/login/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
