import { useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import postData from "../posts.json";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const onSearchHandler = (value) => {
    console.log(value);
    const filteredPost = postData.filter((item) => item.title.includes(value));
    setPosts(filteredPost);
  };

  return (
    <div>
      <h1>Simple Blog</h1>

      <Search onSearchHandler={onSearchHandler} />

      <br />

      {posts.map(({ title, slug, tags, author, date }) => (
        <Article {...{ title, slug, tags, author, date }} key={title} />
      ))}
    </div>
  );
};

export default Home;
