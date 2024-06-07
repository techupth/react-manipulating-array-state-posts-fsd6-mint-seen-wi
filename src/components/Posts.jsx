import userInformation from "./post-object";
import { useState } from "react";
import "../App.css";

function Posts() {

  const [userInfo, setUserInfo] = useState([...userInformation])

  const likeButton = (index) => {
    const newInfo = [...userInfo]
    newInfo[index].likes += 1
    setUserInfo(newInfo)
  }

  const dislikeButton = (index) => {
    const newInfo = [...userInfo]
    newInfo[index].likes === 0 ? newInfo[index].likes = 0  : newInfo[index].likes -= 1;
    setUserInfo(newInfo)
  }
  
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>

    {userInfo.map((item,index) => {
      return (
        <div class="post-list" key={index}>
        <div class="post-item">
          <div class="post-header">
            <h2>{item.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Like: </span>
              <span class="post-likes">{item.likes}</span>
            </div>
          </div>
          <p class="post-content">
            {item.content}
          </p>
          <div class="post-actions">

            <button class="like-button" onClick={() => {
              likeButton(index)
            }}>Like</button>

            <button class="dislike-button" onClick={() => {
              dislikeButton(index)
            }}>Dislike</button>

          </div>
        </div>
      </div>
      )
    })

    }


    </div>
  );
}

export default Posts;
