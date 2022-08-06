import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/layout/Layout";

// Theme handeling
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme/Theme";
import { useAppSelector } from "./hooks/useAppSelector";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  // get theme from store
  const theme = useAppSelector((state) => state.theme);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Layout>
          <RoutesComponent />
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
