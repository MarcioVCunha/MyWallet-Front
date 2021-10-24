import styled from 'styled-components';

export default function MyWalletContent(props) {
    const { values } = props;
    let total = 0;

    return (
        <Container>
            <TransactionsContainer>
                {values.map((transaction) => {
                    const { type, value, date, description } = transaction;
                    type === 'saída' ? total -= Number(value) : total += Number(value);

                    return (
                        <TransactionContainer>
                            <FirstHalf>
                                <Date>{date}</Date>
                                <Description>{description}</Description>
                            </FirstHalf>
                            <Value type={type}>{Number(value).toFixed(2)}</Value>
                        </TransactionContainer>
                    )
                })}
            </TransactionsContainer>
            <Total>
                <TotalText>Saldo</TotalText>
                <TotalValue total={total}>{total.toFixed(2)}</TotalValue>
            </Total>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 110vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

const TransactionsContainer = styled.div`
    overflow-y: scroll;
    margin-bottom: 10px;
`

const TransactionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const FirstHalf = styled.div`
    display: flex;
    align-items: center;
`

const Date = styled.p`
    margin-right: 10px;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    color: rgb(198, 198, 198);
`

const Description = styled.p`
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
`

const Value = styled.p`
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.type === 'saída' ? 'red' : 'green'};; 
`

const Total = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
`

const TotalText = styled.p`
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`

const TotalValue = styled.p`
    font: 17px;
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.total >= 0 ? 'green' : 'red'}
`