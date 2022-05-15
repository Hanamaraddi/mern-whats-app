import React, { useEffect, useState } from 'react';
import Header from '../../header/Header';
import "./Home.css";
import Posts from '../../Components/posts/Posts';
import Sidebar from '../../Components/sidebar/Sidebar';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(() =>{
    const fetchPosts = async() =>{
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts ();
  },[])


  return (
    <>
    <Header />

    <div className='home'>
        
        <Posts posts={posts} />
        <Sidebar />
        
    </div>
    </>
  )
}

