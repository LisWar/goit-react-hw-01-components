import PropTypes from 'prop-types';
import { Container, Description, Avatar, Name, Info, Stats, StatPoint, StatLabel, StatValue } from './Profile.styled';

const Profile = ({username, tag, location, avatar, views, likes, followers}) => (
    <Container>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <Name>{username}</Name>
    <Info>{tag}</Info>
    <Info>{location} 
    </Info>
  </Description>

  <Stats>
    <StatPoint>
      <StatLabel>Followers</StatLabel>
      <StatValue>{followers}</StatValue>
    </StatPoint>
    <StatPoint>
      <StatLabel>Views</StatLabel>
      <StatValue>{views}</StatValue>
    </StatPoint>
    <StatPoint>
      <StatLabel>Likes</StatLabel>
      <StatValue>{likes}</StatValue>
    </StatPoint>
  </Stats>
</Container>
  );

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  views: PropTypes.number.isRequired, 
  likes: PropTypes.number.isRequired, 
  followers: PropTypes.number.isRequired    
}

export default Profile;

