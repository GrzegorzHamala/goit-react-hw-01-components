import React from "react";
import "./Profile.css";
import PropTypes from "prop-types";

function Profile({username, tag, location, avatar, stats}) {
  return (
    <div className="profile">
      <div className="description">
        <img 
        src={avatar} 
        alt="User avatar" 
        className="avatarProfile" />
        <p className="nameProfile">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="labelProfile">{Object.keys(stats)[0]}</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="labelProfile">{Object.keys(stats)[1]}</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="labelProfile">{Object.keys(stats)[2]}</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
