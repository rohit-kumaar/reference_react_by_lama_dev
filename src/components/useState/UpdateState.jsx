import React, { useState } from "react";

const UpdateState = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <h1>{number}</h1>
    </div>
  );
};

export default UpdateState;
