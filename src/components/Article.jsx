const Article = (props) => {
  const { title, body } = props;
  return (
    <div className="article">
      <h3>{title}</h3>
      <p>{body}</p>
      <button>Read</button>
    </div>
  );
};

export default Article;
