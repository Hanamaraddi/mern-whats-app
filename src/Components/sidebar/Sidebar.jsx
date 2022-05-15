import React from 'react';
import './Sidebar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { a } from '@mui/material';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
                alt=''
            />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <a  href='/life'>Life</a>
                </li>
                <li className='sidebarListItem'>
                    <a  href='/music'>Music</a>
                </li>
                <li className='sidebarListItem'>
                    <a  href='/style'>Style</a>
                </li>
                <li className='sidebarListItem'>
                    <a  href='sport' >Sport</a>
                </li>
                <li className='sidebarListItem'>
                    <a  href='/tech'>Tech</a>
                </li>
                <li className='sidebarListItem'>
                    <a  href='/cinema'>Cinema</a>
                </li>
            </ul>
        </div>


        <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <FacebookIcon className='sidebarIcon'/>
            <TwitterIcon className='sidebarIcon'/>
            <PinterestIcon className='sidebarIcon'/>
            <InstagramIcon className='sidebarIcon'/>
        </div>
        </div>
    </div>
  )
}

export default Sidebar