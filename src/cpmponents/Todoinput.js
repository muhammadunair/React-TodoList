import React, { useState } from 'react';


const Todoinput = (props) => {
    const [InputText, setInputText] = useState(''); // ham nai ek state difine.
    const handleEnterPress = (e) => {
        if(e.keyCode === 13){
             props.addList(InputText)
                setInputText("")
        }
    }
  return (
         <div className="input-container">
            <input 
                type="text"  
                className='input-box-todo' 
                placeholder='Enter Your Todo'
                value={InputText}
                onChange={e=> {
                    setInputText(e.target.value) // us state mai hum nai jo bhi text hum inpue mai type karye wo text state mai set ho jaye
                }}
                onKeyDown={handleEnterPress}
            />
            <button className='add-btn'
            onClick={()=>{
                props.addList(InputText)
                setInputText("")
            }}>+</button>
        </div>
  )
}

export default Todoinput
