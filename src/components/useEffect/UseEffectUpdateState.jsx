import React, { useEffect, useState } from "react";

export const UseEffectUpdateState = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("effect runs!");

    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{number}</div>;
};
