import { HeaderText, AddRemovePageContent, TextInput, Header, LongButton } from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';

export default function AddTransaction() {
    const history = useHistory();

    const type = history.location.state.type;

    return (
        <AddRemovePageContent>
            <Header>
                <HeaderText>Nova {type}</HeaderText>
            </Header>
            <TextInput placeholder='Valor' />
            <TextInput placeholder='Descrição' />
            <LongButton onClick={() => history.push('/home-page')}>Salvar {type}</LongButton>
        </AddRemovePageContent>
    )
}