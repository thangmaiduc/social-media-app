import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../store/AuthContext';

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [state] = useContext(AuthContext)
  const {user}=state
  useEffect(() => {
    const fetchPost = async () => {
        const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/"+user._id);
      setPosts(res.data);
    };
    fetchPost();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
       {( !username||user.username ===username) && <Share />}
        {posts && posts.map((p) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}

export default Feed;
