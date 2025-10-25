import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeAction } from '../../feature/themeList';

export const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: any) => state.themeList.theme.name);

  const getActiveClass = ({ isActive}: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link;
  }

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to={"/"} className={getActiveClass}>Todo</NavLink>
        <NavLink to={"/list"} className={getActiveClass}>List</NavLink>
        <div className={classes.toggleButton}>
          <button
            onClick={() => dispatch(toggleThemeAction())}
            className={currentTheme === 'light' ? classes.light : ''}
          >
          </button>
        </div>
      </div>
    </header>
  )
}