import { BrowserRouter, Routes, Route } from 'react-router-dom'
import clsx from 'clsx'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { FavoritesProvider } from './context/FavoritesContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import SearchPage from './pages/SearchPage'
import FavoritesPage from './pages/FavoritesPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className={clsx('app', theme === 'dark' && 'dark')}>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
          <AppContent />
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
