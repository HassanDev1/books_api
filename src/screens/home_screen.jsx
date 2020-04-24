import React, {useState,useContext} from 'react';
import "../App.css";
import CurrentlyReading from "../components/currently_reading";
import WantToRead from '../components/want_to_read';
import Read from "../components/read";
import { BookContext } from '../contexts/BookContext';
import * as BooksAPI from '../BooksAPI'





const HomeScreen = () => {
    const [showSearchPage, setshowSearchPage] = useState(false);
    const{updateBook} = useContext(BookContext)
    const [bookList, setbookList] = useState([]);
    

    const handleSearch=async(e)=>{
        const query = e.target.value;
            
            if(query.trim()){
        try{
            
            const result = await BooksAPI.search(query);
           if(result.error ){
               setbookList([])
           }
           else{
               setbookList(result)
           }

        }
    
        catch(error){
            console.log(error)
        }
       

    }
    }
   
    return ( 
        <div className="app">
        {showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => setshowSearchPage (false)}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={handleSearch}/>
              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
        
        {bookList.map(book=> {
          return(
            <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url(${book.imageLinks?book.imageLinks.thumbnail:''})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e)=>updateBook(book,e.target.value)}>
                  <option value="move" >
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">
              {book.title}
            </div>
              <div className="book-authors">{book.authors}</div>
          </div>
        </li>

          )
        }      
        )
      }
      </ol>
              
                
              
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <CurrentlyReading/> 
                  <WantToRead/>
                  <Read/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => setshowSearchPage (true)}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    )
     
}
 
export default HomeScreen;