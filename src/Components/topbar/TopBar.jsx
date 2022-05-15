import React from 'react';
import './TopBar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function TopBar() {
    const user = false;
  return (
      <>
    <div className='top'>
        <div className='topLeft'>
        <FacebookIcon className='topIcon'/>
        <TwitterIcon className='topIcon'/>
        <PinterestIcon className='topIcon'/>
        <InstagramIcon className='topIcon'/>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link className='link' to='/'>Home</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/about'>About</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/contact' >Contact</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to='/write'>Write</Link>
                </li>
                <li className='topListItem'>
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
        {
            user ? (
                <img className='topImg' 
                src='https://pbs.twimg.com/profile_images/1495258307850047490/TogQu3Lj_400x400.jpg'
                alt=''
            />
            ) : (
                <ul className='topList'>
                <li className='topListItem'>
                <Link className='link' to='/login'>Login</Link>
                </li>

                <li className='topListItem'>
                <Link className='link' to='/register'>Register</Link>
                </li>
                </ul>
            )
        }
            
            <SearchIcon className='topSearchIcon'/>
        </div>
    </div>
    </>
  )
}

export default TopBar