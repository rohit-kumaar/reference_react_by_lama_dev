import "./App.css";
import { UnderstandingUseEffect } from "./components/useEffect/UnderstandingUseEffect";
import { UseEffectDependency } from "./components/useEffect/UseEffectDependency";
import { UseEffectUpdateState } from "./components/useEffect/UseEffectUpdateState";
import ChangeAllInputsWithASingleOnChange from "./components/useState/ChangeAllInputsWithASingleOnChange";
import DerivedStates from "./components/useState/DerivedStates";
import UpdateSpecificObject from "./components/useState/UpdateSpecificObject";
import UpdateState from "./components/useState/UpdateState";

function App() {
  return (
    <div className="App">
      {/* <UpdateState /> */}
      {/* <UpdateSpecificObject /> */}
      {/* <ChangeAllInputsWithASingleOnChange /> */}
      {/* <DerivedStates /> */}
      {/* <UnderstandingUseEffect /> */}
      {/* <UseEffectDependency /> */}
      <UseEffectUpdateState />
    </div>
  );
}

export default App;
