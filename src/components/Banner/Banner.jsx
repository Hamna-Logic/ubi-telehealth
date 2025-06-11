
import { FaHeartbeat, FaUserMd, FaMobileAlt } from "react-icons/fa";


const features = [
  {
    title: "Innovative Solutions",
    icon: <FaUserMd className="text-3xl" />,
    text: (
      <>
        Our team of clinical experts includes: <span className="italic">US based</span>, board-certified
        physicians and compounding pharmacists. They have partnered and created the most <span className="italic">exclusive</span> solutions on the market, <span className="italic">customized</span> to your needs.
      </>
    ),
  },
  {
    title: "Healthcare at Your Home",
    icon: <FaMobileAlt className="text-3xl" />,
    text: "Communicate directly with our clinical team in your own personal space. Creating a private and tactful experience, the way healthcare should be.",
  },
  {
    title: "Reliable Healthcare",
    icon: <FaHeartbeat className="text-3xl" />,
    text: "All solutions are individually formulated, created and distributed from within the US.",
  },
];

const FeatureCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex-1 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-dark text-gray-800 dark:text-white p-6 hover:bg-primary hover:text-white dark:hover:bg-secondary transition-all duration-300 shadow hover:shadow-xl cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            {feature.icon}
          </div>
          <p className="text-sm leading-relaxed">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
