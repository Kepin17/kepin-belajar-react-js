import PropTypes from "prop-types";

const Article = (props) => {
  const { name, title } = props;
  return (
    <div>
      <h1>Hi, my name is {name}</h1>
      <ul>
        {title.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Article.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
