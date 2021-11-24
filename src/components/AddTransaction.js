import { HeaderText, AddRemovePageContent, TextInput, Header, LongButton } from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import getConfig from "../service/service.getConfig";

function postTransaction(type, value, description, history) {

    const config = getConfig();

    const body = {
        value: value,
        description: description,
        type: type
    }

    const promisse = axios.post('http://localhost:4000/add-transaction', body, config);
    promisse.then(() => handleSucces(history)).catch((error) => alert('Não conseguimos salvar a ' + type));
}

function handleSucces(history){
    history.push('/home-page')
}

export default function AddTransaction() {
    const history = useHistory();

    const type = history.location.state.type;
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
                postTransaction(type, value, description, history);
            }}>Salvar {type}</LongButton>
        </AddRemovePageContent>
    )
}