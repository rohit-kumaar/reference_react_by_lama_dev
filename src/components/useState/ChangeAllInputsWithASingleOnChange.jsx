import React, { useState } from "react";

const ChangeAllInputsWithASingleOnChange = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log(user);

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ChangeAllInputsWithASingleOnChange;
