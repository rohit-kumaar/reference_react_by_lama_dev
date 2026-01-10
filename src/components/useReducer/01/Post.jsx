import React, { useReducer } from "react";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from "./postReducer";

export const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  async function handleFetch() {
    dispatch({ type: ACTION_TYPE.FETCH_START });

    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("User not fetch");
      const data = await res.json();
      dispatch({ type: ACTION_TYPE.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTION_TYPE.FETCH_ERROR });
    }
  }

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
