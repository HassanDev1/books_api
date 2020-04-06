import React,{useState} from 'react';
import * as BooksAPI from './BooksAPI'

const BookShelfChanger = (props) => {
    const [shelf, setshelf] = useState('');
    const [updatedBook, setupdatedBook] = useState([]);
    const {onAddingBook} = props;

    const handleUpdate=(book)=>{
        props.books.forEach(b=>{
            if(b.id===book.id){
                console.log(shelf)
                b.shelf = shelf
                setupdatedBook([...updatedBook,book])
            }
        })
    }

    return ( 
        <div className="book-shelf-changer">
        <select  value={shelf} onChange={(e)=>handleUpdate(updatedBook,e.target.value)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value='wantToRead' >Want to Read</option>
          <option value="read" >Read</option>
          <option value="none">None</option>
        </select>
    
      </div>
     );
}
 
export default BookShelfChanger;