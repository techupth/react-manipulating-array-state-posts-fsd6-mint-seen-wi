import { useState } from "react";
import data from "../data";

function Posts() {
  const [numberOfLike, setNumberOfLike] = useState(data);

  const likePost = (likeIndex) => {
    const newCountLike = [...numberOfLike];
    // console.log(newCountLike[likeIndex]);
    newCountLike[likeIndex].likes
      ? (newCountLike[likeIndex].likes += 1)
      : (newCountLike[likeIndex].likes = 1);

    setNumberOfLike(newCountLike);
  };

  const disLikePost = (likeIndex) => {
    const newCountLike = [...numberOfLike];
    newCountLike[likeIndex].likes
      ? (newCountLike[likeIndex].likes -= 1)
      : (newCountLike[likeIndex].likes = 0);

    setNumberOfLike(newCountLike);
  };

  // console.log(numberOfLike);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      {numberOfLike.map((post, index) => {
        return (
          <div className="post-list" key={index}>
            <div className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    likePost(index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    disLikePost(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
