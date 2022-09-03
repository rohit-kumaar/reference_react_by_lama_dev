import "./App.css";
import { UnderstandingUseEffect } from "./components/useEffect/UnderstandingUseEffect";
import { UseEffectDependency } from "./components/useEffect/UseEffectDependency";
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
      <UseEffectDependency />
    </div>
  );
}

export default App;
