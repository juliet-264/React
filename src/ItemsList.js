import React from 'react'
import {IoTrash } from "react-icons/io5";


const ItemsList = ({item, handleCheck, changeClick}) => {
  return (
    <ul>
        {item.map(item => (
          <li className='item' key ={item.id}>
            <input 
            type = "checkbox"
            onChange={() => handleCheck(item.id)}
            checked = {item.checked} 
              />
              <label 
              onDoubleClick={() => handleCheck(item.id)}
              checked = {item.checked} 
              >{item.item}</label>
              <IoTrash
              role = "button"
              onClick={() => changeClick(item.id)}
              tabIndex="0"
              />
          </li>
        ))}
    </ul>
  )
}

export default ItemsList
