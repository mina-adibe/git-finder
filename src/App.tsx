import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Page404 from "./pages/404";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
