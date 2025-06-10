import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GalleryCard = ({ item }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition duration-300">
    <img
      src={item.image}
      alt={item.title}
      className="rounded-lg mb-3 w-full h-48 object-cover"
    />
    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
    <p className="mb-4 text-gray-700 dark:text-gray-300">{item.shortDesc}</p>
    <Link to={`/detail/${item.id}`}>
      <button
        className="px-4 py-2 rounded font-medium transition duration-300"
        style={{
          backgroundColor: "#4a637a",
          color: "#fff",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#3b4f63")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4a637a")}
      >
        Read More
      </button>
    </Link>
  </div>
);

GalleryCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default GalleryCard;
