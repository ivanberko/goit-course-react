import React from "react";
import PropTypes from "prop-types";
import style from "./friendList.module.css";

const FriendList = ({ friends = [] }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={style.item} key={id}>
        <span className={isOnline ? style.online : style.offline}></span>
        <img className={style.avatar} src={avatar} alt="user avatar" />
        <p className={style.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
