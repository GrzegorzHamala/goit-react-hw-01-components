import React from "react";
import "./FriendList.css";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline}) {
  return (
    <li className="item">
      {isOnline === true ? (
        <span className="status"></span>
      ) : (
        <span className="statusOff"></span>
      )}
      <img
        className="avatarFriends"
        src={avatar}
        alt="User avatar"
      />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
