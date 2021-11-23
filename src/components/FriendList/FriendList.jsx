import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
