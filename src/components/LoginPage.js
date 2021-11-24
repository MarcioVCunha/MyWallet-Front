import { useHistory } from 'react-router-dom';
import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import { login } from '../service/service.axios';


export default function LoginPage() {
    const history = useHistory();

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

    function verifyAcces() {
        const promisse = login(userInfo);
        promisse.then((res) => handleSucces(res)).catch(handleError);
    }

    function handleSucces(res) {
        localStorage.setItem('token', res.data);
        history.push('/home-page');
    }

    function handleError() {
        alert('Email ou Senha inexistentes.')
    }


    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput onChange={(e) => saveInfo(e, 'email')} placeholder='E-mail' />
            <TextInput onChange={(e) => saveInfo(e, 'senha')} placeholder='Senha' />
            <LongButton onClick={() => verifyAcces()}>Entrar</LongButton>
            <FooterText
                onClick={() => history.push('/sign-up')}>
                Primeira vez? Cadastre-se!
            </FooterText>
        </PageContent>
    )
}