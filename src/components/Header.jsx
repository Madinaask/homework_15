import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useTheme } from '../context/ThemeContext'
import { useFavorites } from '../context/FavoritesContext'
import './Header.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const { favorites } = useFavorites()

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-logo">
          Книга Рецептов
        </NavLink>
        <nav className="header-nav">
          <NavLink to="/" end className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
            Главная
          </NavLink>
          <NavLink to="/recipes" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
            Рецепты
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
            Поиск
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
            Избранное{favorites.length > 0 && ` (${favorites.length})`}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => clsx('nav-link', isActive && 'active')}>
            О проекте
          </NavLink>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
