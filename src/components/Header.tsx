import profilePic from '../assets/10a1fdf8-9030-4578-8078-5da1f60ff133.jpg';

const buttonClass = 'p-8 hover:bg-gray-100 hover:shadow-lg hover:border-transparent hover:cursor-pointer hover:font-bold hover:text-gray-800 hover: border-b-4 hover:border-violet-800 m-2'

const Header = () => {
  return (
    <>
      <div className='p-3 flex flex-col container content-center justify-center m-5 rouded-lg center static'>
        <header className='flex justify-around bg-white rounded-3xl p-5'>
          <h1 className="text-3xl text-slate-500"><span className='text-violet-400'>SS</span>BOOK</h1>
          <input type="text" placeholder='Busque um livro' className='p-2 border-2 border-slate-800 rounded' />
          <div>
            <img className="object-cover inline-block m-1 h-10 rounded-full" src={profilePic} alt="Profile picture" />
            <p className='inline-block m-1'>Lucas</p>
          </div>
        </header>
        <nav>
          <button className={buttonClass}>Meus livros</button>
          <button className={buttonClass}>Livros emprestados</button>
        </nav>
      </div>
    </>
  )
}

export default Header