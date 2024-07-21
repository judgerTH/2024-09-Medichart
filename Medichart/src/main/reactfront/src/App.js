import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Layout from "./components/layout";
import Home from "./pages/home";
import AdminMain from "./pages/AdminMain";
<<<<<<< HEAD
import Korean from "./components/korean";
import Mymedicheck from "./pages/mymedicheck";
=======
import AdminMonth from "./pages/AdminMonth";
import AdminYear from "./pages/AdminYear";
import AdminNoticeList from "./pages/AdminNoticeList";

import Korean from "./pages/korean";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Email from "./pages/email";
import EmailVerification from "./pages/EmailVerification";
>>>>>>> 6b63ca0793283925e9ad8ee03465c988695033b8

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
        path="/mymedicheck"
        element={
          <Layout>
            <Mymedicheck />
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
      <Route
        path="/signup/email"
        element={
          <Layout>
            <Email />
          </Layout>
        }
      />
      <Route
        path="/signup/email-verification"
        element={
          <Layout>
            <EmailVerification />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
