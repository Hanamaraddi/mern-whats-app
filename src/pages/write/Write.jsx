import React from 'react';
import './Write.css';
import AddIcon from '@mui/icons-material/Add';

function Write() {
  return (
    <div className='write'>
    <img className='writeImg' 
    src='https://image.shutterstock.com/image-photo/wonderful-wintery-scenery-sunny-day-260nw-1912342945.jpg' 
    alt=''/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <AddIcon className='fileInputIcon'/>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}} />
                <input 
                type="text" 
                placeholder="Title" 
                className="writeInput" 
                autoFocus={true}    
                />
            </div>
            <div className='writeFormGroup'>

            <textarea
                placeholder="Content"
                type='text'
                className='writeInput writeText'
            >
            </textarea>

            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write