import React, { useEffect, useState } from "react";

export const UseEffectUpdateState = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // comment strict mode then its update by one!
    setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>{number}</div>;
};
