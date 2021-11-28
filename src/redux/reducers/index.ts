import { combineReducers } from "redux";
import { ITodoAction, ITodoState } from "../../interfaces/ITodo";
import { ADD_TODO, DELETE_TODO, GET_BY_ID, GET_TODO, UPDATE_TODO } from "../actions/types";



const initialState: ITodoState = {
  todos: [],
  todo: null
};


const tastReducer = (state: ITodoState = initialState, action: ITodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODO:
      return { ...state, todos: payload };
    case GET_BY_ID:
      return { ...state, todo: payload };
    case ADD_TODO:
      return { ...state, todos: [payload, ...state.todos] };
    case UPDATE_TODO:
      return {
        ...state, todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload
          } else {
            return todo;
          }
        }),
      };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload.id) };
    default:
      return state;
  };

}

const reducers = combineReducers({
  task: tastReducer
});

export const taskSelector = (state: any) => state.task;
export default reducers;