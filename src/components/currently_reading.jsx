import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const CurrentlyReading = () => {
   
   const{books,updateBook} = useContext(BookContext)
   const currentlyReading = books.filter(b=>b.shelf==='currentlyReading');

    return ( 
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        
                        {currentlyReading.map(book=>{
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
                              <select  value={currentlyReading.shelf} onChange={(e)=>updateBook(book,e.target.value)}>
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

                        })}
                      
                      
                    </ol>
                  </div>
                </div>
     );
}
 
export default CurrentlyReading;
