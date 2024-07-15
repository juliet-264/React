
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from 'react';



function App() {
  const [item, setItem] =useState(
    [
      {
        id:1,
        checked:true,
        item: "practice coding"
      },
      {
        id:2,
        checked:false,
        item: "playing tennis"
      },
      {
        id:3,
        checked:true,
        item: "learn cooking"
      }
    ]
  )
  const handleCheck = (id) =>{
  const list = item.map((item) => 
    item.id==id? {...item, checked: !item.checked} : item)
  setItem(list)

  }

  const changeClick =(id) =>{
    const list = item.filter((item) =>
    item.id !==id)
    setItem(list)

  }
   
  return(
    <div  className ="App">
      <Header title = "SS Studio"/>
      <Content
        item ={item}
        handleCheck ={handleCheck}
        changeClick = {changeClick}
      />
      <Footer
      length = {item.length}
      />
    </div>
  );

}
export default App