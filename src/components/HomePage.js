import styled from "styled-components"
import {
    HeaderText,
    PageContent
}
    from "../styles/StylesShared"

import Logout from '../Assets/Logout.svg';

export default function HomePage() {
    const name = 'Fulano';

    return (
        <PageContent>
            <Header>
                <HeaderText>Olá, {name}</HeaderText>
                <LogoutImage src={Logout} />
            </Header>
        </PageContent>
    )
}

const Header = styled.header`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoutImage = styled.img`
    height: 25px;
`