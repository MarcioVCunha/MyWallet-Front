import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';

function App() {
    return (
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
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);