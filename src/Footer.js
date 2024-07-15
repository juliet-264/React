import React from 'react'

const Footer = ({length}) => {
    const year = new Date()
  return (
    
  //  <div className='Footer'>
  //       <p>CopyRight &copy;{year.getFullYear()}</p>
  //  </div>
  <footer> {length} list {length==1?"item" :"items"}</footer>
  )
}

export default Footer 