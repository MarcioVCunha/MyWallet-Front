import { useHistory } from 'react-router-dom';
import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";

export default function LoginPage() {
    const history = useHistory();

    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
            <LongButton onClick={() => history.push('/home-page')}>Entrar</LongButton>
            <FooterText
                onClick={() => history.push('/sign-up')}>
                Primeira vez? Cadastre-se!
            </FooterText>
        </PageContent>
    )
}