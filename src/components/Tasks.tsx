import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from '../interfaces/ITodo';
import todo from '../redux/actions';
import { taskSelector } from '../redux/reducers';
import Task from './Task';

const Tasks = (): JSX.Element => {
    
    const {todos} = useSelector(taskSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(todo('get'));
    }, [dispatch]);
    return (
        <ul>
            {todos && todos.map((task: ITodo) => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default Tasks
