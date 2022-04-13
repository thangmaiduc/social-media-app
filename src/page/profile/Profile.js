import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import "./profile.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function Profile() {
    const {username} = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
    
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
                className="profileImgCover"
              />
              <img
                src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                alt=""
                className="profileImgUser"
              />
            </div>
            <div className="profileUserInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileUserDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
