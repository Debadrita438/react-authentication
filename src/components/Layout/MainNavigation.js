import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {isLoggedIn ? (
                        <Fragment>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                                <button>Logout</button>
                            </li>
                        </Fragment>
                    ) : (
                        <li>
                            <Link to='/auth'>Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
