import React, { useState } from "react";

function FunctionalUpdateApproach() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>IncreaseAsync</button>
      <h1>{number}</h1>
    </div>
  );
}

export default FunctionalUpdateApproach;
