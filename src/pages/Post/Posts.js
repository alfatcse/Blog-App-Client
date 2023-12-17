import React from "react";
import PostCard from "./PostCard";
import { gql } from "@apollo/client";
const GET_POSTS = gql`
  query PostData {
    posts {
      title
      author {
        name
        email
      }
    }
  }
`;
const Posts = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
      <hr />
      <PostCard></PostCard>
    </div>
  );
};

export default Posts;
