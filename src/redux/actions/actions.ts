import { ITodo } from "../../interfaces/ITodo";
import { ADD_TODO, DELETE_TODO, GET_BY_ID, GET_TODO, UPDATE_TODO } from "./types";

export const getTodo = (payload: ITodo[]) => ({ type: GET_TODO, payload });
export const getTodoById = (payload: ITodo) => ({ type: GET_BY_ID, payload });
export const addTodo = (payload: ITodo) => ({ type: ADD_TODO, payload });
export const updateTodo = (payload: ITodo) => ({ type: UPDATE_TODO, payload });
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, payload:{ id }});
