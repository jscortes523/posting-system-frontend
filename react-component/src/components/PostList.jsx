import React from 'react'
import Post from './Post'
import '../assets/styles/PostList.css'
const PostList = ({posts,loading}) => {
    
    return (
      <div className="post-list_container">
        <h5>
          {`Project${posts.length > 0 ? "s" : ""} Posted: `} 
          <span className="badge badge-success">{posts.length}</span>{" "}          
        </h5>
  
        {posts.length === 0 && !loading ? (
          <div className="alert text-center alert-info">
            Be the first to post a project
          </div>
        ) : null}
  
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    );
  }

export default PostList