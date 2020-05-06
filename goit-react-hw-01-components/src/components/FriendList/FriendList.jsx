import React from "react";
import PropTypes from "prop-types";

const FriendList = ({friendsArr=[]}) => (
  <ul className="friend-list">
    {friendsArr.map((friend) => (
      <li className="item" key={friend.id}>
        <span className="status"></span>
        <img className="avatar" src={friend.avatar} alt="" width="48" />
    <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friendsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;