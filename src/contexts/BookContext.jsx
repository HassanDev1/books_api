import React,{useEffect,useState,createContext} from 'react';
import * as BooksAPI from '../BooksAPI'


 export const BookContext = createContext();

 const BookContextProvider = (props) => {
     const [books, setbooks] = useState([]);
     useEffect (() => {
       async function getBooks(){
           await BooksAPI.getAll()
           .then((book)=>setbooks([...books,book]))
           
        }
        getBooks();   
        
      
    }, );
   
    
 const updateBook= async(book,shelf)=>{
    books.forEach(b=>{
        if(b.id===book.id){
            b.shelf = shelf
        }
    })
    console.log(shelf)
    await BooksAPI.update(book,shelf);

}
     return ( 
         <BookContext.Provider value={{books,updateBook}}>
             {props.children}
         </BookContext.Provider>
      );
 }
  
 export default BookContextProvider;
