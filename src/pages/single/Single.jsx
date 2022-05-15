import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import SinglePost from '../../Components/singlePost/SinglePost';
import './Single.css';

function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar/>
    </div>
  )
}

export default Single