import { useHistory } from 'react-router-dom';
import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import { login } from '../service/service.axios';

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

function verifyAcces(history) {
    const promisse = login(userInfo);
    promisse.then((res) => handleSucces(res, history)).catch(handleError);
}

function handleSucces(res, history) {
    localStorage.setItem('token', res.data);
    history.push('/home-page');
}

function handleError() {
    alert('Email ou Senha inexistentes.')
}

export default function LoginPage() {
    const history = useHistory();

    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput onChange={(e) => saveInfo(e, 'email')} placeholder='E-mail' />
            <TextInput onChange={(e) => saveInfo(e, 'senha')} placeholder='Senha' />
            <LongButton onClick={() => verifyAcces(history)}>Entrar</LongButton>
            <FooterText
                onClick={() => history.push('/sign-up')}>
                Primeira vez? Cadastre-se!
            </FooterText>
        </PageContent>
    )
}