import { HeaderText, AddRemovePageContent, TextInput, Header, LongButton } from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';

export default function NewRemove() {
    const history = useHistory();

    return (
        <AddRemovePageContent>
            <Header>
                <HeaderText>Nova Saída</HeaderText>
            </Header>
            <TextInput placeholder='Valor' />
            <TextInput placeholder='Descrição' />
            <LongButton onClick={() => history.push('/home-page')}>Salvar Saída</LongButton>
        </AddRemovePageContent>
    )
}