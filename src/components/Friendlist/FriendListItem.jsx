import PropTypes from 'prop-types';
import {FriendCard, Status, Avatar} from './Friendlist.styled'


const FriendListItem = ({avatar, name, isOnline}) => (    
    <FriendCard>
        <Status isOnline={isOnline}>●</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </FriendCard>
    );

    FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}