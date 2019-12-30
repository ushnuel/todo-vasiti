import React from 'react';
import Navbar from './navbar';

const home = () => {
  return (
    <div className='td-home'>
      <Navbar />
      <div className='td-home-btns'>
        <div>
          <a href='/create-todo'>
            <button className='td-btn'>Create Todo</button>
          </a>
        </div>
        <div>
          <a href='/all-todo'>
            <button className='td-btn'>View Todo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;
