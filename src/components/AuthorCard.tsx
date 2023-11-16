import { IAuthor } from '../interfaces'

const AuthorCard = (props: {author:IAuthor}) => {
  const { author } = props;
  const { name, picture, booksCount } = author;
  
  return (
    <div className='border-2 border-slate-300 rounded-lg w-1/4 flex h-20'>
      <img
        src={picture}
        alt={name}
        className='rounded-lg w-20 object-cover inline-block'
      />
      <div>
        <h2 className='p-2'>{name}</h2>
        <p className='p-2 font-thin'>{booksCount} livros</p>
      </div>
    </div>
  )
}

export default AuthorCard