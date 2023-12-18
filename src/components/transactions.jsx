import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './transaction';

const Component = styled(Box)`
	@media (max-width: 431px) {
		width: 250px;
		margin: 100px auto;
	};
	& > h5 {
		margin-bottom: 10px;
	}
`;

const Transactions = ({ transactions, deleteTransaction }) => {
	return (
		<Component>
			<Typography variant="h5">Transaction History</Typography>
			<Divider style={{width: '100%'}} />
			<List>
				{
					transactions.map(transaction => {
							return <Transaction transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
					})
				}
			</List>
		</Component>
	)
}

export default Transactions;