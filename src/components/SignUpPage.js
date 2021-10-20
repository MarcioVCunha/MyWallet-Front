import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';

export default function SignUpPage() {
    const history = useHistory();
    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput placeholder='Nome' />
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
            <TextInput placeholder='Confirmar Senha' />
            <LongButton>Cadastrar</LongButton>
            <FooterText
                onClick={() => history.push('/')}>
                Já tem uma conta? Entre agora!
            </FooterText>
        </PageContent>
    )
}