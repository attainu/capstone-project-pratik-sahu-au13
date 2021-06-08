import LeftContainer from "./containers/LeftContainer";
import MainContainer from "./containers/MainContainer";
import RightContainer from "./containers/RightContainer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <LeftContainer />
      <MainContainer />
      <RightContainer />
    </div>
  );
}

export default App;
