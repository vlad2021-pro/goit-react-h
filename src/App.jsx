import React from 'react'
import { Profile } from "../components/Profile/Profile"
import user from '../file-json/user.json'
import {ProfileContainer, ProfileDescription, UsersName, ProfileName, ProfileStats, StatsList, StatsTitle, StatsQuantity} from '../Profile/Profile.styled'


export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    </div>
    
  );
};
