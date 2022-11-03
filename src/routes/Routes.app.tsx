import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import MediaInfo from "../pages/MediaInfo";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

interface Prop {
  themeToggle: () => void;
}

const AppRoutes = ({ themeToggle }: Prop) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout themeToggle={themeToggle}>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/sign_in"
            element={
              <Layout themeToggle={themeToggle}>
                <SignIn />
              </Layout>
            }
          />
          <Route
            path="/sign_up"
            element={
              <Layout themeToggle={themeToggle}>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout themeToggle={themeToggle}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout themeToggle={themeToggle}>
                <Search />
              </Layout>
            }
          />
          <Route
            path="/media/:id"
            element={
              <Layout themeToggle={themeToggle}>
                <MediaInfo />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout themeToggle={themeToggle}>
                <Settings />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
