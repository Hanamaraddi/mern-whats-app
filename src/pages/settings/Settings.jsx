import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Settings.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img 
                    src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' 
                    alt=''
                    />

                    <label htmlFor='fileInput'>
                        <PersonOutlineOutlinedIcon className='settingsPPIcon'/>
                    </label>
                    <input type='file' id='fileInput'style={{display:"none"}}/>
                </div>

                <label>User Name</label>
                <input type="text" placeholder="Name" />

                <label>Email</label>
                <input type="email" placeholder="Email" />

                <label>Password</label>
                <input type="password" placeholder='Password'/>

                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings