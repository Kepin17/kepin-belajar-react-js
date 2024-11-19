import { useState } from "react";
import Article from "../components/Article";
import post from "../posts.json";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>Simple Blog</h1>

      <div>
        cari article : <input type="text" placeholder="cari article" value={search} onChange={(e) => setSearch(e.target.value)} />
        <p>ditemukan 0 untuk pencarian {search}</p>
      </div>
      <br />

      {post.map(({ title, slug, tags, author, date }) => (
        <Article {...{ title, slug, tags, author, date }} key={title} />
      ))}
    </div>
  );
};

export default Home;
