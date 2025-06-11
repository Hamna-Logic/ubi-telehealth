import { useParams } from "react-router-dom";
import { galleryItems } from "../../data.js";

const Detail = () => {
  const { id } = useParams();
  const item = galleryItems.find((item) => item.id === parseInt(id));

  if (!item) return <p className="p-4">Item not found</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: item.fullDesc }}
      />
    </div>
  );
};

export default Detail;
