import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { useState } from 'react';

import UserContext from './contexts/userContext';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import NewAdd from './components/AddTransaction';

function App() {
    const [token, setToken] = useState('');
    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <GlobalStyle />
                <Switch>
                    <Route path='/' exact>
                        <LoginPage />
                    </Route>
                    <Route path='/sign-up' exact>
                        <SignUpPage />
                    </Route>
                    <Route path='/home-page' exact>
                        <HomePage />
                    </Route>
                    <Route path='/add-transaction' exact>
                        <NewAdd />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);