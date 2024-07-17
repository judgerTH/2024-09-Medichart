import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/layout";
import Home from "./pages/home";
import Translate from "./pages/translate";
import AdminMain from "./pages/AdminMain";
import AdminMonth from "./pages/AdminMonth";
import AdminYear from "./pages/AdminYear";
import AdminNoticeList from "./pages/AdminNoticeList";
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
        path="/admin/month"
        element={
          <AdminLayout>
            <AdminMonth />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/year"
        element={
          <AdminLayout>
            <AdminYear />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/noticeList"
        element={
          <AdminLayout>
            <AdminNoticeList />
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
