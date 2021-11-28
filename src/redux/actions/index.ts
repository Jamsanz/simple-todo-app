import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { ITodo, ITodoAction } from "../../interfaces/ITodo";
import { http } from "../../utils";
import { addTodo, deleteTodo, getTodo, getTodoById, updateTodo } from "./actions";


const todo = (type: string, payload?: ITodo | any) =>
    async (dispatch: Dispatch<ITodoAction | any>): Promise<void> => {
        if (type === 'get') {
            try {
                const { data }: AxiosResponse = await http.get('/tasks');
                dispatch(getTodo(data));
            } catch (error) {
                console.log(error);
            }
            return;
        };
        if (type === 'getTodoById') {
            try {
                const { data }: AxiosResponse = await http.get(`/tasks/${payload.id}`);
                dispatch(getTodoById(data));
            } catch (error) {
                console.log(error)
            }
            return;
        };
        if (type === 'post') {
            const { data }: AxiosResponse = await http.post('/tasks', payload);
            dispatch(addTodo(data));
            return;
        };

        if (type === 'update') {
            const { data }: AxiosResponse = await http.put(`/tasks/${payload.id}`, payload);
            dispatch(updateTodo(data));
            return;
        };

        if (type === 'delete') {
            await http.delete(`/tasks/${payload.id}`);
            dispatch(deleteTodo(payload.id));
            return;
        }
    };

export default todo;
