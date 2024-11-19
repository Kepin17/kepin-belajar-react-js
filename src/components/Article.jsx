const Article = (props) => {
  const { title, slug, tag, author, date, isNow } = props;
  return (
    <div className="article">
      <h3>{title}</h3>
      <p>{slug}</p>
      <p>{tag}</p>
      <p>{author}</p>
      <p>{date}</p>
      <small>{isNow ? "New" : "Not New"}</small>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Article;
