import PropTypes from 'prop-types';
import TransactionInfo from './TransactionInfo';
import {Container, TableHead, } from './TransactionHistory.styled'


const TransactionHistory = ({transactions}) => (    
    <Container>
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </tr>
  </thead>

  <tbody>
    {transactions.map(item=> (   
            <TransactionInfo key={item.id} type={item.type} amount={item.amount} currency={item.currency}></TransactionInfo>
        ))}
  </tbody>
</Container>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
    transactions:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired
    }))
}