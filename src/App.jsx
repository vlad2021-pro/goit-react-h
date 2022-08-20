import React from 'react'
import { Profile } from "./components/profile/Profile"
import { Statistics } from "./components/statistics/Statistics"
import user from './file-json/user.json'
import data from './file-json/data.json'



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
    </div>
    
  );
};
