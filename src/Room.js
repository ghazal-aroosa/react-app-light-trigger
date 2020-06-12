import React,{ useState } from 'react';
import './Room.css';


function Room() {
  let [isLit, setLit] =useState(false);
  let[age , setAge]= useState(23);
  


  /*function updateLit(){
    console.log("Button clicked");
    setLit(!isLit);
    
  }*/

  /*const increaseAge= ()=>{
    console.log("IncreaseAge Button clicked");
    setAge(++age);
  }*/
    //below  we use direct the functionality of updateLit fun. in button tag //
    //below  we use direct the functionality of increase Age fun. in button tag //
    
   return (
    <div className={"room " +(isLit? "lit" : "dark")}>
     
      <strong>This Room is</strong> {isLit? "Lit": "dark"}
      <br/>

     <b>Age:</b> {age}
      <br/>

      <button onClick={ ()=> setLit(!isLit) } >Toggle light</button>
      <br/>

      <button onClick ={ ()=>{
         console.log("IncreaseAge Arrow Function");
         setAge(++age); 
         } }  >  
         
         Increase Age  </button>
         

      
    </div>
  );
}

export default Room;
