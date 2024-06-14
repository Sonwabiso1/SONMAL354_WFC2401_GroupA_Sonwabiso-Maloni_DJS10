import React, { useState, useEffect } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Data fetching failed</div>;
  }

  return (
    <div className='posts'>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
