import React, { Component } from 'react';

class BookListSearch extends Component {
    state = {
        query:''
      }
      handleChange=(e)=>{
        this.setState({
            query:e.target.value
        })
    }
    render() { 
        const{query} = this.state;
        const{books,showSearchPage} = this.props;
        const showBooks = query===''?books: books.filter(c=>c.title.toLowerCase()
        .includes(query.toLowerCase()) || c.authors.toString().toLowerCase().includes(query.toLowerCase()))
        return ( 
            <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {showBooks.map((book,idx)=>{
                      return(
                        <li key={idx}>
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
                              <select>
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
}
 
export default BookListSearch;