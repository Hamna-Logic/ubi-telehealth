import Vid1 from "../../assets/Video1.mp4";
import Vid2 from "../../assets/Video2.mp4";
import Vid3 from "../../assets/Video3.mp4";

// Services data array
const VideosData = [
  {
    id: 1,
    vid: Vid1,
    name: "Men's Sexual Health",
  },
  {
    id: 2,
    vid: Vid2,
    name: "Hair Restoration",
  },
  {
    id: 3,
    vid: Vid3,
    name: "Weight Loss",
  },
];

const Videos = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {VideosData.map((videos) => (
          <div
            key={videos.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <video
              src={videos.vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{videos.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {videos.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;

