import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import todo from '../redux/actions';

const AddTask = (): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        dispatch(todo('post',{text:value, status: 'To-do'}));
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit} className="add-form" >
    <div className="form-control">
      <label htmlFor="text">Task</label>
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Add Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required
      />
    </div>
    {/* <div className="form-control">
      <label htmlFor="day">Day & Time</label>
      <input
        v-model="day"
        id="day"
        type="text"
        name="day"
        placeholder="Add Date & Time"
        required
      />
    </div>
    <div className="form-control form-control-check">
      <label htmlFor="reminder">Set Reminder</label>
      <input
        v-model="reminder"
        id="reminder"
        type="checkbox"
        name="reminder"
        placeholder="Add Date & Time"
      />
    </div> */}
    <input type="submit" value="Save Task" className="btn btn-block" />
  </form >
    )
}

export default AddTask
