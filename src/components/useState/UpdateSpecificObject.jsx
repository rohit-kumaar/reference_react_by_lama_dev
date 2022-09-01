import React, { useState } from "react";

const UpdateSpecificObject = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "Rohit",
  });

  const handleChange = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  return (
    <div>
      <h1>User</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter User name"
      />
      <button onClick={handleChange}>Change username</button>
      <span>Username : {user.name}</span>
    </div>
  );
};

export default UpdateSpecificObject;
