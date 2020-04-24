import React from 'react';
import './App.css';

import BookContextProvider from './contexts/BookContext';
import HomeScreen from './screens/home_screen';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <HomeScreen/>
      </BookContextProvider>
     
    </div>
  );
}

export default App;
