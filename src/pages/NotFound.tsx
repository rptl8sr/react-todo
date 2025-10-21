import { Link } from 'react-router-dom';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__animation">
          <div className="not-found__number">4</div>
          <div className="not-found__ghost">
            <div className="not-found__ghost-body">
              <div className="not-found__ghost-eyes">
                <div className="not-found__ghost-eye"></div>
                <div className="not-found__ghost-eye"></div>
              </div>
              <div className="not-found__ghost-mouth"></div>
            </div>
            <div className="not-found__ghost-tail">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="not-found__number">4</div>
        </div>

        <div className="not-found__content">
          <h1 className="not-found__title">Упс! Страница не найдена</h1>
          <p className="not-found__description">
            Похоже, что страница, которую вы ищете, исчезла как призрак в ночи
          </p>
          <div className="not-found__buttons">
            <Link to="/" className="not-found__btn not-found__btn--primary">
              Вернуться домой
            </Link>
            <Link to="/todo" className="not-found__btn not-found__btn--secondary">
              К списку дел
            </Link>
          </div>
        </div>
      </div>

      <div className="not-found__stars">
        <div className="not-found__star"></div>
        <div className="not-found__star"></div>
        <div className="not-found__star"></div>
        <div className="not-found__star"></div>
        <div className="not-found__star"></div>
      </div>
    </div>
  )
}