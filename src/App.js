import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";
import theme from "./components/generic/themes/theme";
import themeAlt from "./components/generic/themes/themeAlt";

import HeaderBarContents from "./components/custom/navigation/HeaderBarContents";

import { ThemeProvider } from "@material-ui/core/styles";

import requestNotificationPermission from "./components/generic/notifications/requestNotificationPermission";
import displayNotification from "./components/generic/notifications/displayNotification";

function App() {
  const Index = Home;

  const [themeState, setThemeState] = React.useState(false);

  requestNotificationPermission();
  React.useEffect(() => displayNotification("hi judy"), []);

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <ThemeProvider theme={themeState ? themeAlt : theme}>
        <div className="App">
          <NavBars
            headerChildren={
              <HeaderBarContents {...{ themeState, setThemeState }} />
            }
          />

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
