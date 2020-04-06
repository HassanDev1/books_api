import React, { Component } from "react";
import BookShelfChanger from "./book_shel_changer";
import * as BooksAPI from './BooksAPI'
class MyReads extends Component {
  state = {
    currentReading: [],
  };
  
  
  render() {
      const {currentReading} = this.state;
    const { books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentReading.map((book, idx) => {
              return (
                <li key={idx}>
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
                      <BookShelfChanger onAddingBook={this.addBook}/>
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

export default MyReads;
