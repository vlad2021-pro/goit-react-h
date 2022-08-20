import React from 'react'
import {ProfileContainer, ProfileDescription, UserName, ProfileName, ProfileStats, StatsList, StatsTitle, StatsQuantity} from '../profile/Profile.styled'


export const Profile = ({username, tag, location, avatar, stats : {followers, views, likes}}) => {
   return (  
   
    <ProfileContainer >
    <ProfileDescription>
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <UserName>{username}</UserName>
      <ProfileName> @{tag}</ProfileName>
      <ProfileName>{location}</ProfileName>
    </ProfileDescription>
  
    <ProfileStats>
      <StatsList>
        <StatsTitle>Followers</StatsTitle>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsList>
      <StatsList>
        <StatsTitle>Views</StatsTitle>
      <StatsQuantity>{views}</StatsQuantity>
      </StatsList>
      <StatsList>
        <StatsTitle>Likes</StatsTitle>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsList>
    </ProfileStats>
          </ProfileContainer>
      )
 
   
}

export default Profile

