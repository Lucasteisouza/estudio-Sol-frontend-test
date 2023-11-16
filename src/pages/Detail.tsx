import { useParams } from "react-router-dom"
import { fetchDetailedBook } from "../helpers";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const getBook = async () => {
    const book = await fetchDetailedBook(id);
    setBook(book);
    setLoading(false);
  }

  useEffect(() => {
    getBook();
  }, [])

  return (
    <>
      <Header />
      <div className="bg-fixed flex flex-col items-center justify-center relative container">
        {loading ? <p>Carregando...</p> : (
          <div className="flex items-center container rounded-2xl border-white border-4 bg-white p-4 m-2 bottom-0">
            <img src={book?.cover} alt={book?.name} />
            <div className="m-2 p-2">
              <h2 className="text-2xl font-bold">{book?.name}</h2>
              <p className="text-xl">{book?.author.name}</p>
              <p className="text-base">{book?.description}</p>
            <h1 className="text-3xl my-6">Sobre o autor</h1>
            <p className="">{book?.author.description}</p>
            <p>informação faltante no DB fornecido</p>
            </div>
          </div>
        )}
      </div>.
      <Footer/>
    </>
  )
}

export default Detail