import "./App.css";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const configureTheme = createTheme({
  palette: {
    primary: {
      main: "#DE559C",
    },
    primaryLight: {
      main: "#EBDEDC",
    },
    black: {
      main: "#244145",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={configureTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
