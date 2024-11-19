import Article from "../components/Article";
import post from "../posts.json";

const Home = () => {
  return (
    <div>
      <h1>Simple Blog</h1>
      <br />

      {post.map((item) => (
        <Article title={item.title} slug={item.slug} tag={item.tags.join(",")} author={item.author} date={item.date} key={item.slug} />
      ))}
    </div>
  );
};

export default Home;
