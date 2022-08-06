import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/layout/Layout";

import Page404 from "./pages/404";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";

// Theme handeling
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme/Theme";
import { useAppSelector } from "./hooks/useAppSelector";
import Bookmarks from "./pages/Bookmarks";

function App() {
  // get theme from store
  const theme = useAppSelector((state) => state.theme);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Bookmarks" element={<Bookmarks />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
