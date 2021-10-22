import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/auth' component={AuthPage} />
                <Route path='/profile' component={UserProfile} />
            </Switch>
        </Layout>
    );
};

export default App;
