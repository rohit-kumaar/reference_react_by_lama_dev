import { ACTION_TYPE } from "./formActionType";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION_TYPE.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case ACTION_TYPE.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case ACTION_TYPE.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case ACTION_TYPE.DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
