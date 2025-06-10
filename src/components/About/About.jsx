import { useState } from "react";
import ABOUT1 from "../../assets/vid-thumbnail.jpg";
import ABOUT2 from "../../assets/play-icon.png";
import VIDEO from "../../assets/Video4.mp4";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const playerClick = () => setIsActive(true);
  const click = () => setIsActive(false);

  const steps = [
    {
      title: "Complete the Form",
      desc: "Answer a few quick questions about your health.",
    },
    {
      title: "Physician Review",
      desc: "Our physicians will review your chart and choose the best solution for you.",
    },
    {
      title: "Delivery to You",
      desc: "After approval, your solution will ship directly and discreetly to your home.",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      >
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Video Thumbnail */}
          <div className="relative basis-[45%] w-full">
            <img
              src={ABOUT1}
              alt="thumbnail"
              className="w-full rounded-xl shadow-lg"
            />
            <img
              src={ABOUT2}
              alt="play-icon"
              className="w-16 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
              onClick={playerClick}
            />
          </div>

          {/* Right - Text Content */}
          <div className="basis-[55%] w-full">
            <h5 className="text-left text-lg font-semibold text-blue-600 dark:text-blue-400">About Us</h5>
            <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
              Why Choose UBI?
            </h2>

            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                Traditional healthcare is a funny thing. You start by having a medical concern, so you call your physician’s office and wait on hold...
              </p>
              <p>
                The day of your appointment finally comes, you drive to your appointment, park, walk inside, and check in...
              </p>
              <p>
                The process is exhausting to even think about, and we knew there was a better way. The choice was simple. Telehealth...
              </p>
              <p>
                After spending ten years delivering telemedicine services to hospitals, we recognized the need to shift our efforts...
              </p>
              <p>
                Save time. Save money. Get back to feeling like YOU faster. Quality healthcare, wherever and whenever you need it. That’s the UBI difference. UBI Telehealth. It just makes sense.
              </p>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center bg-black/90 ${
            isActive ? "flex" : "hidden"
          }`}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={click}
          >
            <video
              src={VIDEO}
              autoPlay
              controls
              className="w-[90%] max-w-[900px] border-4 border-white rounded-xl"
            ></video>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-600 dark:text-blue-400">
            Learn More About
          </h2>
          <p className="text-xl font-semibold mb-12">How It Works</p>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full mb-4 text-lg font-bold mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
