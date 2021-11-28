import React, { MouseEvent } from 'react'
import { useDispatch } from 'react-redux';
import { ITodo } from '../interfaces/ITodo';
import todo from '../redux/actions';
import { useHistory } from 'react-router';
import { Chip } from '@mui/material';

interface IProps {
    task: ITodo
}

const Task = ({ task }: IProps): JSX.Element => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUpdate = (e: MouseEvent<HTMLDivElement>): void => {
        dispatch(todo('update', { ...task, status: 'In-progress' }));
    };

    const handleDelete = (e: MouseEvent, id: number): void => {
        e.preventDefault();
        dispatch(todo('delete', { id }))
    };

    const handleDetails = (e: MouseEvent, task: ITodo): void => {
        e.preventDefault();
        dispatch(todo('getTodoById', task));
        history.push(`/todo/${task.id}`)
    };

    return (
        <div onDoubleClick={handleUpdate} className={`${task.status === 'In-progress' && 'reminder'} task`} >
            <h3>
                <span>
                  {task.text}
                  <Chip label={task.status} />
                </span>
                <span>
                    <i onClick={(e) => handleDetails(e, task)} className="far fa-edit"></i>
                    <i onClick={(e) => handleDelete(e, task.id)} className="far fa-trash-alt" />
                </span>
            </h3>
        </div >
    );
}

export default Task
