import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    const post = posts.map(post => <PostItem key={post._id} post={post} />);
    return <div>{post}</div>;
  }
}

PostFeed.PropTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
