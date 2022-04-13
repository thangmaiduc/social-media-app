import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { format } from "timeago.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../store/AuthContext';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Post({ post }) {
  const [state] = useContext(AuthContext)
    const {user: currentUser}=state
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  useEffect(() => {
    if(post.likes.includes(currentUser._id)){
      setLiked(true)
    }else setLiked(false)
  }, []);
  const likeHandler =async () => {
    const res = await axios.put('/posts/'+post._id+'/like', {userId: currentUser._id});
      console.log(res.data);
    if(liked===true){
      
      setLike(pre=>pre-1)
    }else{
     
      setLike(pre=>pre+1)
    }
    setLiked(!liked)
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="postTopImg"
            />
            <Link to={"/profile/" + user.username}>
              <span className="postName">{user.username}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && <img src={PF + post.img} alt="" className="postImg" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{like} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
