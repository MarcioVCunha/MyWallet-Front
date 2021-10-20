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
import NewAdd from './components/NewAdd';
import NewRemove from './components/NewRemove';

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
                <Route path='/new-add' exact>
                    <NewAdd />
                </Route>
                <Route path='/new-remove' exact>
                    <NewRemove />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);