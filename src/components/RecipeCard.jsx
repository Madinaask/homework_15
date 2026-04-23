import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useFavorites } from '../context/FavoritesContext'
import './RecipeCard.css'

function RecipeCard({ recipe }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(recipe.id)

  const handleFavorite = (e) => {
    e.preventDefault()
    toggleFavorite(recipe)
  }

  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="recipe-card-img-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-card-img"
        />
        <button
          className={clsx('favorite-btn', liked && 'favorite-btn-active')}
          onClick={handleFavorite}
        >
          {liked ? '\u2665' : '\u2661'}
        </button>
      </div>
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <p className="recipe-card-cuisine">{recipe.cuisine}</p>
        <div className="recipe-card-meta">
          <span>&#9733; {recipe.rating}</span>
          <span>{recipe.cookTimeMinutes} мин</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
