export interface ITodo {
    id: number;
    text: string;
    status: string;
    // status: 'To-do' | 'In-progress' | 'Completed';
}

export interface ITodoState {
    todos: ITodo[],
    todo?: ITodo | null
}

export interface ITodoAction {
    type: string;
    payload: ITodo;
}

export type DispatchType = (args: ITodoAction) => ITodoAction
