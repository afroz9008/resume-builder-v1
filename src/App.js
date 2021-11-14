import "./App.css";
import Routes from "./Routes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { createContext, useState } from "react";

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

export const UserDetailsContext = createContext();

function App() {
  const [state, setState] = useState({ percentage: 0 });

  return (
    <ThemeProvider theme={configureTheme}>
      <UserDetailsContext.Provider value={[state, setState]}>
        <Routes />
      </UserDetailsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
