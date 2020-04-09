import React,{useContext} from 'react';
import "../App.css";
import { BookContext } from '../contexts/BookContext';

const BookSearch = () => {
  const{books,updateBook} = useContext(BookContext);
  const bookList = books.filter(b=>b.shelf==='none')
    return (  
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
                    `url(${book.imageLinks.thumbnail})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select onChange={(e)=>updateBook(book,e.target.value)}>
                  <option value="move" disabled>
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
      </ol>)
    
}
 
export default BookSearch;