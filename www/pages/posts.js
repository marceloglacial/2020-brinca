import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Posts = (props) => {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const pageTItle = 'Posts';

  async function fetchData() {
    const res = await fetch('http://localhost:8000/wp-json/wp/v2/posts');
    res
      .json()
      .then((res) => setData(res))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const posts = {
    error: <p>Error!</p>,
    loading: <p>Loading ...</p>,
    success: (
      <>
        {data.map((item) => {
          return <li key={item.id}>{item.title.rendered}</li>;
        })}
      </>
    ),
  };

  if (hasError) return <Layout title={pageTItle}>{posts.error}</Layout>;
  if (data.length === 0)
    return <Layout title={pageTItle}>{posts.loading}</Layout>;

  return (
    <Layout title={pageTItle}>
      <ul>{posts.success}</ul>
    </Layout>
  );
};
export default Posts;
