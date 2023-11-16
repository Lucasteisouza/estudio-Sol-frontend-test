import { useNavigate } from "react-router-dom";
import { IBook } from "../interfaces"

const BookCard = (props: {book:IBook}) => {
  const { book } = props;
  const { cover, author, id } = book;
  let { name } = book;
  if (name.length > 30) name = name.slice(0, 30) + '...';
  const navigate = useNavigate();
  const showDetail = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(`/detail/${id}`)
  } 
  return (
    <div
      className="p-2 w-40 flex flex-col items-center justify-start cursor-pointer"
      onClick={(e) => showDetail(e)}
    >
      <img className="w-full object-contain rounded-md" src={ cover } alt={ name } />
      <h3 className="font-bold">{ name }</h3>
      <p className="font-thin">{ author.name }</p>
    </div>
  )
}

export default BookCard