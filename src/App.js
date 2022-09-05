import "./App.css";
import { ApiRequests } from "./components/useEffect/ApiRequests";
import { UnderstandingUseEffect } from "./components/useEffect/UnderstandingUseEffect";
import { UseEffectCleanUpFunction } from "./components/useEffect/UseEffectCleanUpFunction";
import { UseEffectDependency } from "./components/useEffect/UseEffectDependency";
import { UseEffectUpdateState } from "./components/useEffect/UseEffectUpdateState";
import ChangeAllInputsWithASingleOnChange from "./components/useState/ChangeAllInputsWithASingleOnChange";
import DerivedStates from "./components/useState/DerivedStates";
import UpdateSpecificObject from "./components/useState/UpdateSpecificObject";
import UpdateState from "./components/useState/UpdateState";
import { BrowserRouter as Router } from "react-router-dom";
import { Post } from "./components/useReducer/01/Post";

function App() {
  return (
    <div className="App">
      {/* <UpdateState /> */}
      {/* <UpdateSpecificObject /> */}
      {/* <ChangeAllInputsWithASingleOnChange /> */}
      {/* <DerivedStates /> */}
      {/* <UnderstandingUseEffect /> */}
      {/* <UseEffectDependency /> */}
      {/* <UseEffectUpdateState /> */}
      {/* <UseEffectCleanUpFunction /> */}
      {/* <Router>
        <ApiRequests />
      </Router> */}
      <Post />
    </div>
  );
}

export default App;
