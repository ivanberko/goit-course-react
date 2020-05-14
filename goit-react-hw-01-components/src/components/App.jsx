import React from "react";

import Profile from "./Profile/Profile";
import { name, tag, location, avatar, stats } from "../db/user.json";

import Statistics from "./Statistics/Statistics";
import statistical from "../db/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friends from "../db/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../db/transactions.json";

const App = () => (
  <>
    <Profile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Statistics stats={statistical} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>
  </>
);

export default App;
