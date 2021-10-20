import styled from "styled-components"
import {
    FooterButton,
    HeaderText,
    PageContent
}
    from "../styles/StylesShared"
import { useHistory } from 'react-router-dom';

import Logout from '../Assets/Logout.svg';
import MinusSign from '../Assets/MinusSign.svg';
import PlusSign from '../Assets/PlusSign.svg';

export default function HomePage() {
    const name = 'Fulano';
    const history = useHistory();

    return (
        <PageContent>
            <Header>
                <HeaderText>Olá, {name}</HeaderText>
                <LogoutImage src={Logout} alt='Exit the app icon' />
            </Header>
            <WalletHistory></WalletHistory>
            <Footer>
                <FooterButton onClick={() => history.push('/save-add')}>
                    <img src={PlusSign} alt='Add icon'/>
                    <p>Nova Entrada</p>
                </FooterButton>
                <FooterButton onClick={() => history.push('/save-remove')}>
                    <img src={MinusSign}  alt='Remove icon'/>
                    <p>Nova Saída</p>
                </FooterButton>
            </Footer>
        </PageContent >
    )
}

const Header = styled.header`
    width: 100%;
    margin: 25px auto 25px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoutImage = styled.img`
    height: 25px;
    cursor: pointer;
`

const WalletHistory = styled.main`
    background-color: white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20vh;
    margin-bottom: 20px;
`