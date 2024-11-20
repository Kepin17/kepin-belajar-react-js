import { useEffect, useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState([]);
  const [totalPost, setTotalPost] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  const onSearchHandler = (value) => {
    const filteredPost = posts.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setSearchPost(filteredPost);
    setTotalPost(filteredPost.length);
  };

  return (
    <div>
      <h1>Simple Blog</h1>

      <Search onSearchHandler={onSearchHandler} totalPost={totalPost} />
      <br />

      {searchPost.lenght !== 0 && searchPost.map(({ title, body }, index) => <Article {...{ title, body }} key={index} />)}
    </div>
  );
};

export default Home;
