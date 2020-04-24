import React,{useEffect,useState,createContext} from 'react';
import * as BooksAPI from '../BooksAPI'


 export const BookContext = createContext();

 const BookContextProvider = (props) => {
     const [books, setbooks] = useState([]);
     
     
     

     useEffect (() => {
       async function getBooks(){
        //    await BooksAPI.getAll()
        //    .then((book)=>setbooks(book));
       const myBooks = await BooksAPI.getAll();  
       setbooks(myBooks)   
        }
        getBooks();
        return()=>{
        }
               
    }, );   
   
 const updateBook= (book,shelf)=>{
    books.forEach(b=>{      
        if(b.id===book.id ){     
                b.shelf = shelf  
        }
    })    
     BooksAPI.update(book,shelf);    
}

     return ( 
         <BookContext.Provider value={{books,updateBook}}>
             {props.children}
         </BookContext.Provider>
      );
 }
  
 export default BookContextProvider;
