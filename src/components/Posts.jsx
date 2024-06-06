import data from "./data.jsx";
import { useState } from "react";
const PostListItem = (props) => {
  const [like, setLike] = useState(props.item.likes);
  const handleLike = () => {
    if (like >= 0) {
      setLike(like + 1);
    } else {
      setLike(0);
    }
  };
  const handleDislike = () => {
    if (like >= 0) {
      setLike(like - 1);
    } else {
      setLike(0);
    }
  };
  return (
    <div class="post-item">
      <div class="post-header">
        <h2>Post Title #{props.item.id}</h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes: {like}</span>
        </div>
      </div>
      <p class="post-content">{props.item.content}</p>
      <div class="post-actions">
        <button class="like-button" onClick={handleLike}>
          Like
        </button>
        <button class="dislike-button" onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

const PostList = () => {
  return (
    <div class="post-list">
      {data.map((item, index) => (
        <PostListItem key={index} item={item} />
      ))}
    </div>
  );
};

const Posts = () => {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <PostList />
    </div>
  );
};

export default Posts;
