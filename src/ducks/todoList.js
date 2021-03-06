//Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODOS = "GET_TODOS"

const defaultState = [];
let nextTodoId = 0;

// Reducer
export default function (state = defaultState, action) {
  console.log('reducer Action');
  switch (action.type) {
    case ADD_TODO: {
      return state.concat([action.payload]);
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map((v) => { 
              const value = {...v};
              if (value.id === id) {
                value.completed = !value.completed;
              }
              return value;
            })
    }
    case GET_TODOS: {
      return [...state];
    }
    default:
      return state;
  }
};

// Action Creators
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
    completed: false
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export const getTodos = () => ({
  type: GET_TODOS
})

// thunks 