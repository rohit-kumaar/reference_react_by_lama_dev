import { useReducer, useRef } from "react";
import { ACTION_TYPE } from "./formActionType";
import { formReducer, INITIAL_STATE } from "./formReducer";

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: ACTION_TYPE.CHANGE_INPUT,
      payload: { name: name, value: value },
    });
  };

  const handleTag = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: ACTION_TYPE.ADD_TAG, payload: tag });
    });
  };

  console.log(state);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <br />
        <p>Category:</p>
        <select name="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="t-shirt">T-shirt</option>
          <option value="Jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          cols="30"
          rows="10"
          placeholder="Separate tags with commas..."
        ></textarea>
        <br />
        <button onClick={handleTag} type="button">
          Add Tags
        </button>
        <div>
          {state.tags.map((tag) => (
            <a
              href="#"
              onClick={() => {
                dispatch({ type: ACTION_TYPE.REMOVE_TAG, payload: tag });
              }}
              key={tag}
            >
              <h1> {tag}</h1>
            </a>
          ))}
        </div>
        <div>
          <button
            onClick={() => dispatch({ type: ACTION_TYPE.INCREASE })}
            type="button"
          >
            +
          </button>
          <span>Quantity: ({state.quantity})</span>
          <button
            onClick={() => dispatch({ type: ACTION_TYPE.DECREASE })}
            type="button"
          >
            -
          </button>
        </div>
      </form>
    </div>
  );
};
