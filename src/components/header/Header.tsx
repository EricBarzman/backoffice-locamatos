import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='h-screen border-r-2 py-3 px-8 flex flex-col justify-around items-base'>

      {/* Accueil */}
      <Link className='hover:bg-gray-200 p-3 rounded-xl bg-gray-100' to="/">
        Accueil
      </Link>

      {/* Nav */}
      <nav className='flex flex-col justify-between h-1/2 items-base'>
        <Link className='hover:bg-gray-300 p-3 rounded-xl bg-gray-200' to="/category">
          Catégories
        </Link>
        <Link className='hover:bg-gray-300 p-3 rounded-xl bg-gray-200' to="/subcategory">
          Sous-catégories
        </Link>
        <Link className='hover:bg-gray-300 p-3 rounded-xl bg-gray-200' to="/product">
          Produits
        </Link>
        <Link className='hover:bg-gray-300 p-3 rounded-xl bg-gray-200' to="/product">
          Utilisateurs
        </Link>
      </nav>

      {/* Sign out */}
      <Link className='hover:bg-gray-200 p-3 rounded-xl bg-gray-100' to="/signout">
        Sign out
      </Link>
    </header>
  )
}

export default Header