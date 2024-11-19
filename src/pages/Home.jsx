import { useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import postData from "../posts.json";

const Home = () => {
  const [posts, setPosts] = useState(postData);
  const [totalPost, setTotalPost] = useState(0);

  const onSearchHandler = (value) => {
    setPosts(postData);
    const filteredPost = postData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setPosts(filteredPost);
    setTotalPost(filteredPost.length);
  };

  return (
    <div>
      <h1>Simple Blog</h1>

      <Search onSearchHandler={onSearchHandler} totalPost={totalPost} />
      <br />

      {posts.map(({ title, slug, tags, author, date, isNow }, index) => (
        <Article {...{ title, slug, tags, author, date, isNow }} key={index} />
      ))}
    </div>
  );
};

export default Home;
