import "./rightbar.css";
import { Users } from "../../dummyData";
import OnlineFreinds from "../onlineFreinds/OnlineFreinds";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../store/AuthContext";
import { Add, Check } from '@material-ui/icons';
import { Link, useParams } from "react-router-dom";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Rightbar({ user }) {
    const [state, dispatch] = useContext(AuthContext);
    const { user: currentUser } = state;
    const [friends, setFriends] = useState([]);
    const [isFriend, setIsFriend] = useState(false);
    useEffect(() => {
        const fetchFriends = async () => {
            try {
                if (user!==undefined) {

                    let res = await axios.get("/users/friends/" + user._id);
                    setFriends(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchFriends();
    }, [user]);
    useEffect(() => {
        setIsFriend(currentUser.followings.includes(user?._id));
    }, [user])

    const handleFollow = async () => {
        try {
            console.log(isFriend);
            if(isFriend){
                await axios.put('/users/' + user._id + '/unfollow', { userId: currentUser._id }) 
                dispatch({type: 'UNFOLLOW', payload:user._id })
            }else{
                await axios.put('/users/' + user._id + '/follow', { userId: currentUser._id })
                dispatch({type: 'FOLLOW', payload:user._id })
            } 
            setIsFriend(!isFriend)
        } catch (error) {
            console.log(error);
        }
    }
    const HomeRighbar = () => {
        return (
            <div className="rightbar">
                <div className="rightbarWrapper">
                    <div className="birthdayWrapper">
                        <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
                        <span className="birthdayText">
                            <b>Nhi Nguyen</b> and <b>3 others</b> have a birthday today.
                        </span>
                    </div>

                    <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                        {friends.map((u) => (
                            <OnlineFreinds key={u.id} user={u} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
    const ProfileRightbar = () => {
        return (
            <div className="rightbar">
                {user.username !== currentUser.username &&
                    (<button className="rightbarButtonWrapper" onClick={handleFollow}>
                        <span className="followButton">
                            {!isFriend ? 'Follow' : 'Unfollow'}
                        </span>
                        {!isFriend ? <Add /> : <Check />}
                    </button>)
                }
                <div className="rightbarUserInfo">
                    <h4 className="rightbarTitle">User Information</h4>
                    <div className="rightbarKeyValue">
                        <span className="rightbarkKey">City:</span>
                        <span className="rightbarValue">{user.city}</span>
                    </div>
                    <div className="rightbarKeyValue">
                        <span className="rightbarkKey">Country:</span>
                        <span className="rightbarValue">{user.country}</span>
                    </div>
                    <div className="rightbarKeyValue">
                        <span className="rightbarkKey">Relationship:</span>
                        <span className="rightbarValue">{user.relationship}</span>
                    </div>
                </div>
                <div className="rightbarFriendFlowingContainer">
                    <h4 className="rightbarTitle">User Friends</h4>
                    <ul className="rightbarFriendList">
                        {friends.map((u) => (
                            <Link to={'/profile/' + u.username} key={u._id}>
                                <li className="rightbarFriendsItem">
                                    <img
                                        src={u.profilePicture ? PF + u.profilePicture : PF + 'person/noAvatar.png'}
                                        alt=""
                                        className="rightbarImgFriend"
                                    />
                                    <span className="righbarFriendName">{u.username}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
    return <>{user ? <ProfileRightbar /> : <HomeRighbar />}</>;
}

export default Rightbar;
