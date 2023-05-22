import React from 'react'

const Todolist = (props) => {
  const currentDate = new Date().toLocaleString();
  return (
    <>
      <li className="list-item">
           <span> {props.item} </span>
        <span className='icons'>
            <i className="fa-solid fa-trash icon-delete" 
            onClick={e=>{
                props.deleteitem(props.index)
            }}
            >
            </i>
        </span> 
        <span> {currentDate}</span>
      </li>
    </>
  )
}

export default Todolist
