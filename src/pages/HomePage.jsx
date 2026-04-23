import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Книга Рецептов</h1>
        <p>Рецепты с сайта DummyJSON.</p>
        <Link to="/recipes" className="hero-btn">
          Смотреть рецепты
        </Link>
      </section>
    </div>
  )
}

export default HomePage
