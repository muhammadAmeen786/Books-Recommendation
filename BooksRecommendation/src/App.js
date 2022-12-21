import { useState } from "react";
import "./styles.css";

let booksObj = {
  Religious :[" The Gita", "The Bible ", " The Quran "], 
  SelfHelp: [" How to win Friends and Influence People "," The Compound Effect ","Eat That Frog "],
  Financial:["The Psycology of Money ","Fincancial freedom ","Money Management"]
}

let booksArray = Object.keys(booksObj);




export default function App() {

 
  const [books,useBooks] = useState([]);
  function booksRecommended(book){
    
    useBooks(booksObj[book])
  }
  
 
 
  return (
    <div className="App">
      <div>
        <h1>
        Let Me recommend you some books
        </h1>

        <h3>
          {
          books.map((item)=>{
            return <li className="list-item">{item}</li>
          })
          }
          



        </h3>
        
          
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
