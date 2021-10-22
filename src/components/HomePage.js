import styled from "styled-components"
import {
    FooterButton,
    HeaderText,
    PageContent,
    Header
}
    from "../styles/StylesShared"
import { useHistory } from 'react-router-dom';
import { useContext } from "react";

import UserContext from "../contexts/userContext";
import Logout from '../Assets/Logout.svg';
import MinusSign from '../Assets/MinusSign.svg';
import PlusSign from '../Assets/PlusSign.svg';
import axios from "axios";

function logout(setToken, history) {
    setToken('');
    history.push('/');
}

export default function HomePage() {
    const name = 'Fulano';
    const { token, setToken } = useContext(UserContext);
    const history = useHistory();

    return (
        <PageContent>
            <Header>
                <HeaderText>Olá, {name}</HeaderText>
                <LogoutImage src={Logout} alt='Exit the app icon'
                    onClick={() => {
                        logout(setToken, history);
                    }}
                />
            </Header>

            <WalletHistory></WalletHistory>

            <Footer>
                <FooterButton onClick={() => history.push('/new-add')}>
                    <img src={PlusSign} alt='Add icon' />
                    <p>Nova Entrada</p>
                </FooterButton>
                <FooterButton onClick={() => history.push('/new-remove')}>
                    <img src={MinusSign} alt='Remove icon' />
                    <p>Nova Saída</p>
                </FooterButton>
            </Footer>
        </PageContent >
    )
}

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