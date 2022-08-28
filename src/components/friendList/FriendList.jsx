import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'



export const FriendList = ({friends}) => {
    return (
       <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </div>

    )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

