import React from 'react'
import { Profile } from "./components/profile/Profile"
import { Statistics } from "./components/statistics/Statistics"
import {FriendList} from './components/friendList/FriendList'
import {TransactionHistory} from './components/transaction/Transactions'
import user from './file-json/user.json'
import data from './file-json/data.json'
import friends from './file-json/friends.json'
import transactions from './file-json/transactions'



export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics  title="Upload stats" stats={data}  />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
    
  );
};
