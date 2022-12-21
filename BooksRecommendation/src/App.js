import { useState } from "react";
import "./styles.css";

let booksObj = {
  Religious :["1: The Gita| ", "2: The Bible| ", "3: The Quran |"], 
  SelfHelp: ["1: How to win Friends and Influence People| ","2: The Compound Effect |","3: Eat That Frog "],
  Financial:["1:The Psycology of Money |","2: Fincancial freedom| ","3: Money Management"]
}

let booksArray = Object.keys(booksObj);




export default function App() {

 
  const [books,useBooks] = useState("");
  function booksRecommended(book){
    useBooks(booksObj[book])
  }
 
 
  return (
    <div className="App">
      <div>
        <h1>
        Let Me recommend you some books
        </h1>
        <h3> {books} </h3>
          
          <div >

                
               
                <div>{booksArray.map((book)=>{
                  return <li className='eachbook' onClick={()=>booksRecommended(book)}>
                    {book} 
                  </li>;
                })}</div>
             

          </div>
        </div>
       
    </div>
  );
}
