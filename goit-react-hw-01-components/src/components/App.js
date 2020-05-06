import React from "react";
import Description from "./Profile/Description";
import StatsUser from "./Profile/StatsUser";
import Profile from "./Profile/Profile";
import { name, tag, location, avatar, stats } from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statistical from "./Statistics/statistical-data.json";

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
  </>
);

export default App;
