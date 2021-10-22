import { useHistory } from 'react-router-dom';
import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import axios from 'axios';
import UserContext from '../contexts/userContext';
import { useContext } from 'react';

const userInfo = {
    email: '',
    password: ''
}

function saveInfo(e, type) {
    if (type === 'email') {
        userInfo.email = e.target.value;
    } else {
        userInfo.password = e.target.value;
    }
}

function verifyAcces(setToken, history) {
    const promisse = axios.post('http://localhost:4000/login', userInfo);
    promisse.then((res) => handleSucces(res, setToken, history)).catch(handleError);
}

function handleSucces(res, setToken, history) {
    setToken(res.data);
    history.push('/home-page');
}

function handleError() {
    alert('Email ou Senha inexistentes.')
}

export default function LoginPage() {
    const { setToken } = useContext(UserContext);
    const history = useHistory();

    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput onChange={(e) => saveInfo(e, 'email')} placeholder='E-mail' />
            <TextInput onChange={(e) => saveInfo(e, 'senha')} placeholder='Senha' />
            <LongButton onClick={() => verifyAcces(setToken, history)}>Entrar</LongButton>
            <FooterText
                onClick={() => history.push('/sign-up')}>
                Primeira vez? Cadastre-se!
            </FooterText>
        </PageContent>
    )
}