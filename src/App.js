import React, { useState } from 'react';
import '../src/App.css';
import Todoinput from './cpmponents/Todoinput';
import Todolist from './cpmponents/Todolist';

const App = () => {
const [listtodo, setListtodo] = useState([]);
let addList = (InputText) => {
  if(InputText!=='')
  setListtodo([...listtodo,InputText]);
}
const deletelistItem = (key) => {
  let newListTodo = [...listtodo];
  newListTodo.splice(key,1)
  setListtodo([...newListTodo])
}
  return (
    <div className='main-container'>
          <div className="center-container">
            <Todoinput addList={addList}/>
            <h1 className="app-heading">TODO</h1>
            <hr />
            {listtodo.map((listItem, i)=> {
              return (
                 <Todolist key={i} item={listItem} index={i} deleteitem={deletelistItem}/>
              )
             
            })}
          </div>
    </div>
  )
}

export default App
