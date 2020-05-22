//Complete the necessary code in this file
// import useState
import React/*, {useState}*/ from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

import dummyData from '../../dummy-data';

const PostsPage = (props) => {
  // set up state for your data
  const filteredData = dummyData.filter((item) => {
    return item.username.includes(props.search);
  });

  // const [data, setData] = useState(filteredData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {filteredData.map((post) => {
        return <Post key={post.username} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
