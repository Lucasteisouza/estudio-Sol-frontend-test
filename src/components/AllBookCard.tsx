import { useNavigate } from "react-router-dom";
import { IBook } from "../interfaces"

const BookCard = (props: {book:IBook}) => {
  const { book } = props;
  const { cover, author, id, name } = book;
  const navigate = useNavigate();
  const showDetail = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(`/detail/${id}`)
  } 
  return (
    <div
      className="p-2 m-2 w-3/12 flex items-center justify-start cursor-pointer"
      onClick={(e) => showDetail(e)}
    >
      <img className="w-3/12 object-contain rounded-md m-1" src={ cover } alt={ name } />
      <div className="m-1">
        <h3 className="font-bold">{ name }</h3>
        <p className="font-thin">{ author.name }</p>
      </div>
    </div>
  )
}

export default BookCard