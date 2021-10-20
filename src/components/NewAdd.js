import { HeaderText, AddRemovePageContent, TextInput, Header, LongButton } from "../styles/StylesShared";
import { useHistory } from 'react-router-dom';

export default function NewAdd() {
    const history = useHistory();

    return (
        <AddRemovePageContent>
            <Header>
                <HeaderText>Nova Entrada</HeaderText>
            </Header>
            <TextInput placeholder='Valor' />
            <TextInput placeholder='Descrição' />
            <LongButton onClick={() => history.push('/home-page')}>Salvar Entrada</LongButton>
        </AddRemovePageContent>
    )
}