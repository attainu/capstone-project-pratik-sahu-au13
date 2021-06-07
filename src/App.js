import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftContainer from "./containers/LeftContainer";
import MainContainer from "./containers/MainContainer";
import RightContainer from "./containers/RightContainer";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <LeftContainer />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <RightContainer />
      </Router>
    </div>
  );
}

export default App;
