import css from './App.module.css';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

export default function App() {
  return (
    <>
      <section className={css.page}>
        <Profile
          username={userData.username}
          avatar={userData.avatar}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>
      <section className={css.page}>
        <FriendList friends={friends} />
      </section>
      <section className={css.page}>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
}
