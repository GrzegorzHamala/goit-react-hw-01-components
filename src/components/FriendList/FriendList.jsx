import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
