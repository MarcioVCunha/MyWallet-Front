import { HeaderText, AddRemovePageContent, TextInput, Header, LongButton } from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';
import UserContext from "../contexts/userContext";
import { useContext } from "react";
import axios from "axios";

function postTransaction(type, value, description, token, history) {
    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    const body = {
        value: value,
        description: description,
        type: type
    }

    const promisse = axios.post('http://localhost:4000/add-transaction', body, config);
    promisse.then().catch((error) => alert('Não conseguimos salvar a ' + type));
}

export default function AddTransaction() {
    const history = useHistory();

    const type = history.location.state.type;
    const { token } = useContext(UserContext);
    let value = '';
    let description = '';

    return (
        <AddRemovePageContent>
            <Header>
                <HeaderText>Nova {type}</HeaderText>
            </Header>
            <TextInput onChange={(e) => value = e.target.value} placeholder='Valor' />
            <TextInput onChange={(e) => description = e.target.value} placeholder='Descrição' />
            <LongButton onClick={() => {
                postTransaction(type, value, description, token, history)
                history.push('/home-page');
            }}>Salvar {type}</LongButton>
        </AddRemovePageContent>
    )
}