import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={HomePage} />
                {!authCtx.isLoggedIn && <Route path='/auth' component={AuthPage} />}
                <Route path='/profile'>{authCtx.isLoggedIn ? <UserProfile /> : <Redirect to='/auth' />}</Route>
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;
