import { useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import postData from "../posts.json";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState(0);

  const onSearchHandler = (value) => {
    console.log(value);
    const filteredPost = postData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setPosts(filteredPost);
    setTotalPost(filteredPost.length);
  };

  return (
    <div>
      <h1>Simple Blog</h1>

      <Search onSearchHandler={onSearchHandler} totalPost={totalPost} />
      <br />

      {posts.map(({ title, slug, tags, author, date, isNow }) => (
        <Article {...{ title, slug, tags, author, date, isNow }} key={title} />
      ))}
    </div>
  );
};

export default Home;
