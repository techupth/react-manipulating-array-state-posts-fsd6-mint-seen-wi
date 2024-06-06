import { useState } from "react";
import data from "../data";

function Posts() {
  const [numberOfLike, setNumberOfLike] = useState([]);

  const likePost = (likeIndex) => {
    const newCountLike = [...numberOfLike];
    // console.log(newCountLike[likeIndex]);
    newCountLike[likeIndex]
      ? (newCountLike[likeIndex] += 1)
      : (newCountLike[likeIndex] = 1);

    setNumberOfLike(newCountLike);
  };

  const disLikePost = (likeIndex) => {
    const newCountLike = [...numberOfLike];
    newCountLike[likeIndex]
      ? (newCountLike[likeIndex] -= 1)
      : (newCountLike[likeIndex] = 0);

    setNumberOfLike(newCountLike);
  };

  // console.log(numberOfLike);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      {data.map((post, index) => {
        return (
          <div className="post-list" key={index}>
            <div className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{numberOfLike[index] || 0}</span>
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
