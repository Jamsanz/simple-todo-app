import React from 'react'
import { useSelector } from 'react-redux';
import { taskSelector } from '../redux/reducers';

const TodoDetails = (): JSX.Element => {
    const {todo} = useSelector(taskSelector);
    return (
        <div className="container">
            {todo && todo.text}
        </div>
    )
}

export default TodoDetails;
