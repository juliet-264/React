import React from 'react'
import ItemsList from '../ItemsList'

    
const Content = ({item,handleCheck, changeClick}) => {

  return (
    <main>
     {
      (item.length) ? (
        <ItemsList
          item ={item}
          handleCheck ={handleCheck}
           
          changeClick = {changeClick}
        />
        
      ) : (
        <p>your list is empty</p>
      )
     }
   
    </main>
    
  )
}

export default Content