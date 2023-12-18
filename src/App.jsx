import { useState } from 'react';
import { Typography, Box, styled } from '@mui/material';

import Balance from './components/balance';
import ExpenseCard from './components/expenseCard';
import Transactions from './components/transactions';
import NewTransaction from './components/newTransaction';

import './App.css';

const Header = styled(Typography)`
  @media (max-width: 488px) {
    width: 100%;
  };
  @media (max-width: 431px) {
    font-size: 25px;
	};
  margin: 10px 0;
  font-size: 36px;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  @media (max-width: 884px) {
    flex-direction: column;
    align-items: center;
  };
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`;

function App() {
  
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -20},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Book', amount: -100},
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
  }


  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;