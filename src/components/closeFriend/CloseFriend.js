const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function CloseFriend({user}) {
  return (
    <li className="sidebarFriendItem">
      <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
