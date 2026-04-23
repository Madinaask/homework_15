import { useFavorites } from '../context/FavoritesContext'
import RecipeCard from '../components/RecipeCard'
import { Link } from 'react-router-dom'
import './FavoritesPage.css'

function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <div className="favorites-page">
      <h1>Избранное</h1>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>У вас пока нет избранных рецептов.</p>
          <Link to="/recipes" className="favorites-link">
            Перейти к рецептам
          </Link>
        </div>
      ) : (
        <div className="recipes-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
