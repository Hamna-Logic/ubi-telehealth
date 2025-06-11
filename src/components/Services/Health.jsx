import { useRef, useEffect } from "react";
import VIDEO from "../../assets/Health.mp4";
import BannerImage from "../../assets/msh-banner.png"; // Add your banner image import
import Image1 from "../../assets/msh-1.png"; // Add your first image import
import Image2 from "../../assets/msh-2.png"; // Add your second image import
import Image3 from "../../assets/msh-3.png"; // Add your third image import

const Health = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const faqs = [
    {
      question: "What is Erectile Dysfunction (ED)?",
      answer: "Erectile Dysfunction (ED) is the inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It can be caused by physical, psychological, or a combination of both factors."
    },
    {
      question: "What is Tadalafil?",
      answer: "Tadalafil is a phosphodiesterase type 5 (PDE5) inhibitor that helps increase blood flow to the penis, aiding in achieving and maintaining an erection. It is known for its longer duration of action, which can last up to 36 hours, earning it the nickname 'the weekend pill.'"
    },
    {
      question: "What is Vardenafil?",
      answer: "Vardenafil is a phosphodiesterase type 5 (PDE5) inhibitor that works similarly to tadalafil. It is commonly used to treat ED. It has a shorter duration of action than tadalafil but is more potent and reaches therapeutic plasma concentration within 30 to 60 minutes.",
    },
    {
      question: "What is Apomorphine?",
      answer: "Apomorphine is a dopamine agonist that stimulates dopamine receptors in the brain involved in the erectile response and can cause enhanced sexual arousal. Contrary to what the name suggests, it is NOT a narcotic and in no way related to morphine."
    },
    {
      question: "Are there any side effects of using these medications?",
      answer: "Common side effects are not serious and may include headaches, flushing, nasal congestion, dizziness, and digestive issues. Let your UBI provider know if you are experiencing any of these symptoms."
    },
    {
      question: "What should I expect when I order my UBReady?",
      answer: "A US-based, US-trained licensed physician will review your records and your order request and will either approve it as requested, or suggest alternatives as clinically appropriate. The prescription is then sent electronically to our US licensed pharmacy and after fulfillment by the pharmacy will reach your doorstep in no more than 5 business days."
    },
  ];

  return (
    <>
      <section
        id="about"
        className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      >
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Video Player */}
          <div className="relative basis-[45%] w-full">
            <video
              ref={videoRef}
              src={VIDEO}
              autoPlay
              muted
              loop
              controls
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div className="basis-[55%] w-full">
            <h5 className="text-left text-lg font-semibold text-blue-600 dark:text-blue-400">
              whenever you need to be.
            </h5>
            <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
              BE READY
            </h2>

            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                <b>
                  The premier Rx medication that helps you achieve and maintain an erection.
                </b>
              </p>
              <p>
                Rapid absorption under the tongue FAST acting and LONG lasting.
              </p>
              <p>
                Pay as little as <strong>$3.99/dose</strong>
              </p>
              <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
                Includes:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Physician consultations",
                  "Free shipping",
                  "FSA/HSA approved",
                  "No hidden fees",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-left text-sm text-gray-700 dark:text-gray-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Unleash renewed vitality with UBReady
          </h2>
          <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              <strong className="text-gray-900 dark:text-white">UBready</strong> is a unique medication which enhances your ability to take part in more spontaneous sexual activity.
            </p>
            <p>
              This three-in-one pill is consumed orally by placing it under the tongue and having it quickly dissolve in under one minute.
            </p>
            <p>
              The blend of Vardenafil (the active ingredient in Levitra®), Tadalafil (the active ingredient in Cialis®), and low dose apomorphine, produces a sexual euphoria, which encourages this fast acting medication to and take effect in as little as 15 minutes.
            </p>
            <p>
              This triad produces all the benefits individuals are looking for in a sexual stimulant, and helps treat erectile dysfunction.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Above FAQ */}
  <section className="py-12 bg-[#a4bfd4] dark:bg-[#a4bfd4]">
  <div className="w-[90%] max-w-6xl mx-auto">
    <div className="w-full px-4"> {/* Added horizontal padding */}
      <img  
        src={BannerImage} 
        alt="UBReady Benefits" 
        className="w-full h-auto rounded-xl shadow-xl object-cover max-h-[400px]"
      />
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-[90%] max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none">
                    <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Images Below FAQ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="w-[90%] max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
       Other Products of Interest for Erectile Dysfunction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img 
                src={Image1} 
                alt="Fast Acting" 
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src={Image2} 
                alt="Discreet Delivery" 
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src={Image3} 
                alt="Clinically Proven" 
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Health;