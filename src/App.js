import "./App.css";
import { ApiRequests } from "./components/useEffect/ApiRequests";
import { UnderstandingUseEffect } from "./components/useEffect/UnderstandingUseEffect";
import { UseEffectCleanUpFunction } from "./components/useEffect/UseEffectCleanUpFunction";
import { UseEffectDependency } from "./components/useEffect/UseEffectDependency";
import { UseEffectUpdateState } from "./components/useEffect/UseEffectUpdateState";
import ChangeAllInputsWithASingleOnChange from "./components/useState/ChangeAllInputsWithASingleOnChange";
import DerivedStates from "./components/useState/DerivedStates";
import { BrowserRouter as Router } from "react-router-dom";
import { Post } from "./components/useReducer/01/Post";
import { Form } from "./components/useReducer/02/Form";
import FunctionalUpdateApproach from "./components/useState/FunctionalUpdateApproach";

function App() {
  return (
    <div className="App">
      {/* <FunctionalUpdateApproach /> */}
      {/* <ChangeAllInputsWithASingleOnChange /> */}
      <DerivedStates />
      {/* <UnderstandingUseEffect /> */}
      {/* <UseEffectDependency /> */}
      {/* <UseEffectUpdateState /> */}
      {/* <UseEffectCleanUpFunction /> */}
      {/* <Router>
        <ApiRequests />
      </Router> */}
      {/* <Post /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
