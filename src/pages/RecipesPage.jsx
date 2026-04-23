import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import Loader from '../components/Loader'
import './RecipesPage.css'

function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/recipes?limit=12')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="error-message">Ошибка загрузки: {error}</p>
  }

  return (
    <div className="recipes-page">
      <h1>Рецепты</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default RecipesPage
