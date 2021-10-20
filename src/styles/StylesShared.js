import styled from 'styled-components';

const PageContent = styled.main`
    margin: auto;
    height: 100vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: white;
    margin-bottom: 30px;
`

const TextInput = styled.input`
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px;
    background-color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    padding: 0 15px;
    margin-bottom: 10px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: black;
    }
`

const LongButton = styled.button`
    width: 100%;
    height: 45px;
    text-align: center;
    background-color: rgb(163, 40, 214);
    border-radius: 5px;
    color: white;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
    cursor: pointer;
`

const FooterText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    color: white;
    cursor: pointer;
`

const Header = styled.header`
    width: 100%;
    margin: 25px auto 25px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: white;
`

const FooterButton = styled.button`
    width: 47%;
    height: 100%;
    background-color: rgb(163, 40, 214);
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;

    img{
        height: 20px;
        width: 20px;
    }

    p{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: white;
        text-align: start;
    }
`

const AddRemovePageContent = styled.div`
    width: 80%;
    margin: 20px auto 0 auto;
`

export { PageContent, Logo, TextInput, LongButton, FooterText, Header, HeaderText, FooterButton, AddRemovePageContent };