
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BookCreate from './Components/BookCreate';
import BookList from "./Components/BookList"
function App() {
  const [books,setBooks] = useState([])

  const editBookById =async (id,newTitle)=>{
   const response =  await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle
    })
    console.log(response,'lll');
    const updadtedBooks =books.map((book)=>{
      if (book.id === id) {
        return {...book,...response.data}
      }
      return book
    })
    
    setBooks(updadtedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const createBook=async (title)=>{
    const response = await  axios.post('http://localhost:3001/books',{
      title
    })
    
   const updatedBooks=[...books,response.data
   ]
   setBooks(updatedBooks)
  }
  // fetch data
  const fetchBooks = async ()=>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
