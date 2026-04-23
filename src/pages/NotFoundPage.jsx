import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" className="not-found-link">
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFoundPage
