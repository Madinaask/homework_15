import { useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import Loader from '../components/Loader'
import './SearchPage.css'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setSearched(true)

    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.recipes)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="search-page">
      <h1>Поиск рецептов</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Введите название рецепта..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Найти
        </button>
      </form>

      {loading && <Loader />}

      {error && <p className="error-message">Ошибка: {error}</p>}

      {!loading && searched && results.length === 0 && (
        <p className="search-empty">Ничего не найдено по запросу «{query}»</p>
      )}

      {!loading && results.length > 0 && (
        <div className="recipes-grid">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
