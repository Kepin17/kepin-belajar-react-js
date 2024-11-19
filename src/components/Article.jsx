import PropTypes from "prop-types";

const Article = (props) => {
  const { title, slug, tag, author, date } = props;
  return (
    <div className="article">
      <h3>{title}</h3>
      <p>{slug}</p>
      <p>{tag}</p>
      <p>{author}</p>
      <p>{date}</p>
      <hr />
      <br />
      <br />
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.arrayOf(PropTypes.string).isRequired,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
