import PropTypes from 'prop-types';
import {TableItem, TableRow,} from './TransactionHistory.styled'


const TransactionInfo = ({type, amount, currency}) => (    
    <TableRow>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </TableRow>
);


export default TransactionInfo;

TransactionInfo.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}