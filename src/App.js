import React from 'react';
import './App.css';
import BooksApp from './components/booksapp';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BooksApp/>
      </BookContextProvider>
     
    </div>
  );
}

export default App;
