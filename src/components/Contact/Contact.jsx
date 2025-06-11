import { MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SupportSection = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Top Section with Image */}
      <div
        className="relative w-full -0 h-48 md:h-60 lg:h-[300px] bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: `url('src/assets/banner-5.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Need Support?</h1>
          <p className="text-gray-200 mt-2">Experience the UBI Difference</p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto mt-10 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border dark:border-gray-700 rounded-2xl p-6 shadow-md dark:shadow-none hover:shadow-lg transition bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center text-center">
              <HelpCircle className="text-blue-500 dark:text-blue-400 mb-4" size={32} />
              <p className="text-gray-800 dark:text-gray-100 mb-4">
                I have a question about your services
              </p>
              <Link to="/login" className="bg-blue-100 dark:bg-blue-500 dark:text-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-600 transition">
                →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border dark:border-gray-700 rounded-2xl p-6 shadow-md dark:shadow-none hover:shadow-lg transition bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center text-center">
              <MessageCircle className="text-blue-500 dark:text-blue-400 mb-4" size={32} />
              <p className="text-gray-800 dark:text-gray-100 mb-4">
                I have an account and I need customer support
              </p>
              <Link to="/explore-ubi" className="bg-blue-100 dark:bg-blue-500 dark:text-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-600 transition">
                →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;