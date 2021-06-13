import { LeftContainer, MainContainer, RightContainer } from "./containers";
import AuthContextProvider from "./stateHandling/contexts/AuthContext";
import { StateContext } from "./stateHandling/contexts/StateContext";
import { BrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getCourses } from "./stateHandling/utils/dataFromServer";
import "./App.scss";

function App() {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    getCourses(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
          <LeftContainer />
          <MainContainer />
          <RightContainer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
