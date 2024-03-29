import styled from 'styled-components';
import { useState, useEffect } from 'react';

import MyWalletContent from './MyWalletContent';
import { getBalance } from '../service/service.axios';

export default function WalletHistory() {
    const [content, setContent] = useState('');

    useEffect(() => {
        const promisse = getBalance();
        promisse.then(handleSucces).catch();
    }, [])

    function handleSucces(res) {
        if (res.data.length === 0) {
            setContent(<EmptyContent>Não há registros de
                entrada ou saída</EmptyContent>)
        } else {
            setContent(
                <MyWalletContent values={res.data} />
            )
        }
    }

    return (
        <Container>
            {content}
        </Container>
    )
}

const Container = styled.main`
    background-color: white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const EmptyContent = styled.p`
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: rgb(134, 134, 134);
    text-align: center;
`