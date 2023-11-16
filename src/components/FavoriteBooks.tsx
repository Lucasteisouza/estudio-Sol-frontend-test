import { fetchFavoriteBooks } from '../helpers'
import { useEffect, useState } from 'react';
import { IBook } from '../interfaces';
import BookCard from './BookCard';

const FavoriteBooks = () => {
  const [books, setBooks] = useState([])
  const getAllBooks = async () => {
    const books = await fetchFavoriteBooks()
    setBooks(books.data.favoriteBooks.slice(0, 5))
  };

  useEffect(() => {getAllBooks()}, [])
  return (
    <>
      <div className="flex justify-between container p-88////////// n+">
        <h2 className='text-4xl font-bold'>Livros favoritos</h2>
        <button>ver todos</button>
      </div>
      <div className='container flex justify-between'>
        {books ? books.map((book: IBook) => <BookCard key={book.id} book={book}/>) : <p>Carregando...</p>}
      </div>

    </>
  )
}

export default FavoriteBooks