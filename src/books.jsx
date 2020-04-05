import React from "react";
import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookListSearch from "./booklistsearch";
import MyReads from "./myreads";
import WantToRead from "./wanttoread";
import Read from "./read";

class BooksApp extends React.Component {
  state = {
      books:[],
     
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };
  componentDidMount(){
      BooksAPI.getAll()
      .then((books)=>{
          this.setState({
              books
          })
      })
      
  }


  render() {

        

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookListSearch  books={this.state.books} showSearchPage={this.state.showSearchPage} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <MyReads/>       
                <WantToRead/>
                <Read/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
