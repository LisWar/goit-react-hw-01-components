
//import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';




import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions'


export const App = () => {
  return (
    <div>
      <Profile 
      username={user.username} 
      tag={user.tag} 
      location={user.location} 
      avatar={user.avatar} 
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}>
      </Profile>

      
      <Statistics
      data={data}>
      </Statistics>

      <FriendList
      friends={friends}
      >
      </FriendList>

      <TransactionHistory
      transactions={transactions}>
      </TransactionHistory>
    </div>
  );
};
