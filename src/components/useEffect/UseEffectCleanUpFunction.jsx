import React, { useEffect, useState } from "react";

export const UseEffectCleanUpFunction = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("effect runs!");

    return () => {
      console.log("Wait before running the effect, I should clean here!");
      console.log("okey done! you can run!");
    };
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};
