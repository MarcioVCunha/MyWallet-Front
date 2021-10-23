import styled from "styled-components"
import {
    FooterButton,
    HeaderText,
    PageContent,
    Header
}
    from "../styles/StylesShared"
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from "../contexts/userContext";
import Logout from '../Assets/Logout.svg';
import MinusSign from '../Assets/MinusSign.svg';
import PlusSign from '../Assets/PlusSign.svg';
import WalletHistory from "./WalletHistory.js";

function logout(setToken, history) {
    setToken('');
    history.push('/');
}

export default function HomePage() {
    const { token, setToken } = useContext(UserContext);
    const history = useHistory();
    const [name, setName] = useState('');

    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    useEffect(() => {
        const promisse = axios.get('http://localhost:4000/user-info', config);
        promisse.then(handleSucces);
    }, [])

    function handleSucces(res) {
        setName(res.data.name);
    }

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

            <WalletHistory />

            <Footer>
                <FooterButton onClick={() => history.push({
                    pathname: '/add-transaction',
                    state: { type: 'entrada' }
                })}>
                    <img src={PlusSign} alt='Add icon' />
                    <p>Nova Entrada</p>
                </FooterButton>
                <FooterButton onClick={() => history.push({
                    pathname: '/add-transaction',
                    state: { type: 'saída' }
                })}>
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

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20vh;
    margin-bottom: 20px;
`