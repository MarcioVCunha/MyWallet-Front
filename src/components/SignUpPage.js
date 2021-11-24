import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from "../service/service.baseURL";

const userInfo = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
};

let isDisabled = false;

function saveString(e, type) {
    switch (type) {
        case 'name':
            userInfo.name = e.target.value;
            break;

        case 'email':
            userInfo.email = e.target.value;
            break;

        case 'password':
            userInfo.password = e.target.value;
            break;

        case 'password confirmation':
            userInfo.passwordConfirmation = e.target.value;
            break;

        default:
            break;
    }
}

function sendObject(history) {
    toggleInputs();
    const promisse = axios.post(`${BASE_URL}sign-up`, userInfo);
    promisse.then(() => {
        handleSucces();
        history.push('/');
    }).catch((resp) => handleError(resp));
}

function handleSucces() {
    toggleInputs();
    userInfo.name = '';
    userInfo.email = '';
    userInfo.password = '';
    userInfo.passwordConfirmation = '';
    alert('Cadastro feito com sucesso');
}

function handleError(resp) {
    if (resp.response.status === 400) {
        alert('"Senha" e "Confirmar Senha" diferentes ou Email já cadastrado');
    } else {
        alert(`
            Não conseguimos efetuar o cadastro.
            O nome deve ter pelo menos 3 caracteres.
            A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.
        `);
    }
    toggleInputs();
}

function toggleInputs() {
    isDisabled = !isDisabled;
}

export default function SignUpPage() {
    const history = useHistory();
    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput disabled={isDisabled} onChange={(e) => saveString(e, 'name')} placeholder='Nome' />
            <TextInput disabled={isDisabled} onChange={(e) => saveString(e, 'email')} placeholder='E-mail' />
            <TextInput disabled={isDisabled} onChange={(e) => saveString(e, 'password')} placeholder='Senha' />
            <TextInput disabled={isDisabled} onChange={(e) => saveString(e, 'password confirmation')} placeholder='Confirmar Senha' />
            <LongButton disabled={isDisabled} onClick={() => sendObject(history)}>Cadastrar</LongButton>
            <FooterText disabled={isDisabled}
                onClick={() => history.push('/')}>
                Já tem uma conta? Entre agora!
            </FooterText>
        </PageContent>
    )
}