import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import Logo from "./components/custom/media/Logo";

import theme from "./theme";
import themeAlt from "./themeAlt";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  const Index = Home;

  const [themeState, setThemeState] = React.useState(false);

  const switchTheme = () => setThemeState(!themeState);

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <ThemeProvider theme={themeState ? themeAlt : theme}>
        <div className="App">
          <NavBars {...{ Logo, themeState, switchTheme }} />
          {/* <button onClick={changeTheme}>change</button> */}
          <main>
            <Route exact path="/" component={Index} />
            <AllRoutes />
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
