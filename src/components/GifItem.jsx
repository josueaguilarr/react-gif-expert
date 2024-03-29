import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
  return (
    <li className="card">
      <a href={url} target="_blank">
        <img src={url} alt={title} />
        <div className="card__description">
          <p>{title}</p>
        </div>
      </a>
    </li>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
