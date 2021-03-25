import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'

export function Summary() {
    const { transactions }  = useTransactions();

    const { deposits, withdraws, total } = transactions.reduce((acumulator, transaction) => {
        if(transaction.type === 'deposit') {
            acumulator.deposits += transaction.amount;
            acumulator.total += transaction.amount;
        } else {
            acumulator.withdraws += transaction.amount;
            acumulator.total -= transaction.amount;
        }

        return acumulator;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Sídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(total)}
                </strong>
            </div>
        </Container>
    );
}