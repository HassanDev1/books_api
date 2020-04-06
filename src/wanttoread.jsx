import React, { Component } from 'react';
import BookShelfChanger from './book_shel_changer';

class WantToRead extends Component {
    state = {
        wanttoread:[]
      }
     
    render() { 
        // {JSON.stringify(this.state.wanttoread)}
        const{wanttoread} = this.state;
        const { books } = this.props;
        return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wanttoread.map((book,idx) => {
                  return (
                    <li key = {idx}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`,
                            }}
                          ></div>
                          <BookShelfChanger/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        );
    }
}
 
export default WantToRead;