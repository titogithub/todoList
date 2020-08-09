import { VISIBILITY_FILTERS } from "../constants";
// Actions
const SET_FILTER = "SET_FILTER";
const defaultState = VISIBILITY_FILTERS.ALL;

// Reducer
export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

// Action creators

export const setFilter = filter => (
  { 
    type: SET_FILTER,
    payload: filter
  }
)
