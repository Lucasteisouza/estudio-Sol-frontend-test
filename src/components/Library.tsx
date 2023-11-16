import { IAuthor, IBook } from "../interfaces"
import { useState, useEffect } from "react"
import { fetchFavoriteAuthors, fetchAllBooks } from "../helpers"
import AuthorCard from "./AuthorCard"
import AllBookCard from "./AllBookCard"

const Library = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([])
  const [filterOption, setFilterOption] = useState<string>("all-books")
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([])
  const [allBooks, setAllBooks] = useState<IBook[]>([])
  const getAuthors = async () => {
    const authors = await fetchFavoriteAuthors()
    setAuthors(authors)
  };
  const getAllBooks = async () => {
    const books = await fetchAllBooks()
    setAllBooks(books);
    setFilteredBooks(books);
  };
  useEffect(() => {
    getAuthors();
    getAllBooks();
  }, []);

  useEffect(() => {
    if (filterOption === 'all-books') {
      setFilteredBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter(book => book.category.toUpperCase() === filterOption.toUpperCase())
      setFilteredBooks(filteredBooks)
    }
  }, [filterOption, allBooks])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(e.target.value)

  };
  return (
    <div className="w-11/12 bg-white rounded-3xl p-5 flex flex-col justify-center shadow-xl">
      <div className="flex justify-between w-10/12 m-auto p-2 w-1/2">
        <h1 className="text-3xl font-bold p-2 m-2">Artistas favoritos</h1>
        <h2>ver todos</h2>
      </div>
      <div className="container flex justify-around">
        {authors.length > 0 ? authors.map((author: IAuthor) => <AuthorCard key={author.id}author={author}/>) : <p>Carregando...</p>}
      </div>
      
      <h1 className="p-5 m-5 mx-24 text-3xl">Biblioteca</h1>
      <div className="flex w-5/12 justify-around mx-auto m-2 p-2">
        <div>
          <input type="radio" name="category-filter" id="all-books" value='all-books' checked={filterOption === 'all-books'} className="hidden peer" onChange={handleChange}/>
          <label htmlFor="all-books" className="text-lg font-bold appearence-none border-2 p-5 rounded-3xl border-slate-300 hover:bg-slate-100 cursor-pointer peer-checked:bg-violet-400 peer-checked:border-white peer-checked:text-white">
            Todos
          </label>
        </div>
        <div>
          <input type="radio" name="category-filter" id="romance" value='romance' checked={filterOption === 'romance'} onChange={handleChange} className="hidden peer"/>
          <label htmlFor="romance" className="text-lg font-bold appearence-none border-2 p-5 rounded-3xl border-slate-300 hover:bg-slate-100 cursor-pointer peer-checked:bg-violet-400 peer-checked:border-white peer-checked:text-white">
          Romance
          </label>
        </div>
        <div>
          <input type="radio" name="category-filter" id="adventure" value='adventure' checked={filterOption === 'adventure'} onChange={handleChange} className="hidden peer"/>
          <label htmlFor="adventure" className="text-lg font-bold appearence-none border-2 p-5 rounded-3xl border-slate-300 hover:bg-slate-100 cursor-pointer peer-checked:bg-violet-400 peer-checked:border-white peer-checked:text-white">
            Aventura
          </label>
        </div>
        <div>
          <input type="radio" name="category-filter" id="comedy" value='comedy' checked={filterOption === 'comedy'} onChange={handleChange} className="hidden peer"/>
          <label htmlFor="comedy" className="text-lg font-bold appearence-none border-2 p-5 rounded-3xl border-slate-300 hover:bg-slate-100 cursor-pointer peer-checked:bg-violet-400 peer-checked:border-white peer-checked:text-white">
            Comédia
          </label>
        </div>
      </div>
      <div className="flex flex-wrap justify-center m-2 p-2">
        {filteredBooks.length > 0 ? filteredBooks.map((book: IBook) => <AllBookCard key={ book.id } book={ book } />) : <p>Carregando...</p>}
      </div>
    </div>
  )
}

export default Library