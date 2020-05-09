import React from "react";
import PropTypes from "prop-types";
import style from "./friendList.module.css";

const FriendList = ({ friendsArr = [] }) => (
  <ul className={style.friendList}>
    {friendsArr.map((friend) => (
      <li className={style.item} key={friend.id}>
        <span className={friend.isOnline ? style.online : style.offline}></span>
        <img className={style.avatar} src={friend.avatar} alt="" width="48" />
        <p className={style.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friendsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
