
import { useState } from 'react';
import './App.css';
import BookCreate from './Components/BookCreate';
import BookList from "./Components/BookList"
function App() {
  const [books,setBooks] = useState([])

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    })
    setBooks(updatedBooks)
  }
  const createBook=(title)=>{
   const updatedBooks=[
        ...books,
        {id:Math.round(Math.random()*9999)
        ,title}
   ]
   setBooks(updatedBooks)
  }
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
