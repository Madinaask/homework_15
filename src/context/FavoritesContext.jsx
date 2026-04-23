import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === recipe.id)
      if (exists) {
        return prev.filter((item) => item.id !== recipe.id)
      }
      return [...prev, recipe]
    })
  }

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
