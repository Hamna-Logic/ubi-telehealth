import ServicesBanner from "../../assets/Sevices-banner.jpg";
import MensHealthImage from "../../assets/si-1.png";
import WeightLossImage from "../../assets/si-2.png";
import HairRestorationImage from "../../assets/si-3.png";

export default function ExploreUBI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center p-8 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Text Content */}
      <header className="text-center max-w-3xl mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-300 mb-4">
          Explore UBI Telehealth&#39;s exclusive products
        </h1>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-200">
          Dive into our premium selection of solutions
        </p>
      </header>

      {/* Banner Image */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800/50 mb-12">
        <img 
          src={ServicesBanner}
          alt="UBI Telehealth Products"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Category Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-8 border-b-2 border-blue-300 dark:border-blue-700 pb-2">
          Browse By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men's Sexual Health */}
          <article className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-800/50 overflow-hidden flex flex-col hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={MensHealthImage} 
                alt="Men's Sexual Health"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-6">
                Men&#39;s Sexual Health
              </h3>
              <a
                href="/services/Health"
                className="self-start text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                discover more
              </a>
            </div>
          </article>

          {/* Weight Loss */}
          <article className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-800/50 overflow-hidden flex flex-col hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={WeightLossImage} 
                alt="Weight Loss"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-6">
                Weight Loss
              </h3>
              <a
                href="/services/Weight"
                className="self-start text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                discover more
              </a>
            </div>
          </article>

          {/* Hair Restoration */}
          <article className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-800/50 overflow-hidden flex flex-col hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={HairRestorationImage} 
                alt="Hair Restoration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-6">
                Hair Restoration
              </h3>
              <a
                href="/services/Hairs"
                className="self-start text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                discover more
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}