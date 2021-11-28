import React from 'react'
import AddTask from '../components/AddTask';
import Header from '../components/Header';
import Tasks from '../components/Tasks';

const Home = (): JSX.Element => {
    return (
        <div className="container">
          <Header title="Todo-list" />
          <AddTask />
          <Tasks />
        </div>
    );
};

export default Home
