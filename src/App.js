import "./App.css";
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
      <DerivedStates />
    </div>
  );
}

export default App;
