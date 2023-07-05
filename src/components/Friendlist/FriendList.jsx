import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {Container, } from './Friendlist.styled'

const FriendList = ({friends}) => (    
    <Container>
    {friends.map(item=> (   
        <FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline}></FriendListItem>
    ))}
    </Container>
);


export default FriendList;

FriendList.propTypes = {
    transactions:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired
    }))
}