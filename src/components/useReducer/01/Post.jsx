import React, { useReducer } from "react";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from "./postReducer";

export const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something want wrong"}</span>
    </div>
  );
};
