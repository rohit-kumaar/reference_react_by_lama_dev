import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const ApiRequests = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2] || 1;
  const URL = `http://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    console.log("useEffect mounts");
    const cancelToken = axios.CancelToken.source();

    axios
      .get(URL, { cancelToken: cancelToken.token })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancelled!");
        } else {
          // todo:handle error
        }
      });

    return () => {
      console.log("useEffect unmounts");
      cancelToken.cancel();
    };
  }, [id]);

  return (
    <div>
      <h4>Name:{user.name}</h4>
      <h4>Username:{user.username}</h4>
      <h4>Email:{user.email}</h4>

      <Link to="/user/1">Fetch User 1</Link>
      <Link to="/user/2">Fetch User 2</Link>
      <Link to="/user/3">Fetch User 3</Link>
    </div>
  );
};
