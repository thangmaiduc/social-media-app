const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function OnlineFriends({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendOnlineContainer">
        <img
          src={PF+user.profilePicture}
          alt=""
          className="rightbarFriendProfileImg"
        />
        <span className="rightbarOnlineStatus"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

export default OnlineFriends;
