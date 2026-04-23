import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import './RecipeDetailPage.css'

function RecipeDetailPage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Рецепт не найден')
        }
        return res.json()
      })
      .then((data) => {
        setRecipe(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="error-message">
        <p>Ошибка: {error}</p>
        <Link to="/recipes">Назад к рецептам</Link>
      </div>
    )
  }

  return (
    <div className="recipe-detail">
      <Link to="/recipes" className="back-link">&larr; Назад к рецептам</Link>

      <div className="recipe-detail-header">
        <img src={recipe.image} alt={recipe.name} className="recipe-detail-img" />
        <div className="recipe-detail-info">
          <h1>{recipe.name}</h1>
          <p className="recipe-detail-cuisine">{recipe.cuisine}</p>
          <div className="recipe-detail-stats">
            <div className="stat">
              <span className="stat-value">&#9733; {recipe.rating}</span>
              <span className="stat-label">Рейтинг</span>
            </div>
            <div className="stat">
              <span className="stat-value">{recipe.prepTimeMinutes} мин</span>
              <span className="stat-label">Подготовка</span>
            </div>
            <div className="stat">
              <span className="stat-value">{recipe.cookTimeMinutes} мин</span>
              <span className="stat-label">Готовка</span>
            </div>
            <div className="stat">
              <span className="stat-value">{recipe.servings}</span>
              <span className="stat-label">Порции</span>
            </div>
            <div className="stat">
              <span className="stat-value">{recipe.difficulty}</span>
              <span className="stat-label">Сложность</span>
            </div>
          </div>
          {recipe.tags && (
            <div className="recipe-detail-tags">
              {recipe.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="recipe-detail-body">
        <section>
          <h2>Ингредиенты</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Инструкция</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}

export default RecipeDetailPage
