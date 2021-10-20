import { useHistory } from 'react-router-dom';
import {
    PageContent,
    Logo,
    TextInput,
    LongButton,
    FooterText
} from "../styles/StylesShared";
import styled from 'styled-components';

export default function LoginPage() {
    const history = useHistory();

    return (
        <PageContent>
            <Logo>MyWallet</Logo>
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
            <LongButton>Entrar</LongButton>
            <FooterText
                onClick={() => history.push('/sign-up')}>
                Primeira vez? Cadastre-se!
            </FooterText>
        </PageContent>
    )
}