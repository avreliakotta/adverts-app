import css from './header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/catalog" className={css.link}>
                Catalog
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/favorites" className={css.link}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
