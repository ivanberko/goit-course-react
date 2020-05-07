import React from "react";

import Description from "./Profile/Description";
import StatsUser from "./Profile/StatsUser";
import Profile from "./Profile/Profile";
import { name, tag, location, avatar, stats } from "./Profile/user.json";

import Statistics from "./Statistics/Statistics";
import statistical from "./Statistics/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friendsArr from "./FriendList/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import HeadTransaction from "./TransactionHistory/HeadTransaction";
import transactions from "./TransactionHistory/transactions.json";

const App = () => (
  <>
    <Profile>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <StatsUser
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </Profile>
    <Statistics stats={statistical} />
    <FriendList friendsArr={friendsArr} />
    <TransactionHistory items={transactions}>
      <HeadTransaction />
    </TransactionHistory>
  </>
);

export default App;
