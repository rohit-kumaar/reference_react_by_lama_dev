import React, { useEffect, useState } from "react";

export const UnderstandingUseEffect = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect runs!");
    document.title = `You clicked ${number} times`;
  }, [number]);

  console.count("Component rendered!");

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
