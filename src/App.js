import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";

import theme from "./components/generic/themes/theme";
import themeAlt from "./components/generic/themes/themeAlt";
// import theme from "./theme";
// import themeAlt from "./themeAlt";
// import themeGenerator from "./components/generic/themes/themeGenerator";

import Logo from "./components/custom/media/Logo";

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
