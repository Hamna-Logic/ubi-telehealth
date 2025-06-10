import { useRef, useEffect, useState } from "react";
import VIDEO from "../../assets/HairLoss.mp4";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Hairs = () => {
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleStage = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const faqs = [
    {
      question: "What is hair loss and what causes it?",
      answer: "Hair loss, or alopecia, can be caused by various factors including genetics, hormonal changes, medical conditions, medications, and lifestyle factors. Androgenetic alopecia, commonly known as male or female pattern baldness, is the most common form of hair loss."
    },
    {
      question: "What are compounded hair loss treatments?",
      answer: "Compounded hair loss treatments are customized formulations prepared by a pharmacist in consultation with UBI scientists. Multiple active ingredients, namely minoxidil, finasteride, latanoprost, and ketoconazole, are combined to address different aspects of hair loss and promote hair growth."
    },
    {
      question: "What is Minoxidil?",
      answer: "Minoxidil is a topical medication that stimulates hair follicles to promote hair growth. It is commonly used to treat androgenetic alopecia and other forms of hair thinning.",
    },
    {
      question: "What is Finasteride?",
      answer: "Finasteride is an oral medication that inhibits the conversion of testosterone to dihydrotestosterone (DHT), a hormone that contributes to hair loss. In compounded formulations, it can be included in topical sprays to reduce systemic side effects."
    },
    {
      question: "What is Latanoprost?",
      answer: "Latanoprost is a medication originally used to treat glaucoma, but it has been found to promote eyelash and hair growth by increasing the anagen (growth) phase of hair follicles."
    },
    {
      question: "What is Ketoconazole?",
      answer: "Ketoconazole is an antifungal medication that also has anti-inflammatory and anti-androgenic properties. It can help treat dandruff and seborrheic dermatitis, conditions that can contribute to hair loss."
    },
    {
      question: "How do I use the compounded hair spray?",
      answer: "Apply the hair spray to the affected areas, on the scalp. This is done approximately once or twice daily, 2 to 4 sprays each time."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results can vary, but most users start to see improvement in hair growth within 3 to 6 months of consistent use. Full results may take up to a year or longer."
    },
    {
      question: "Are there any side effects of using this hair spray?",
      answer: "Common side effects may include scalp irritation, itching, redness, or dryness."
    },
    {
      question: "Who should not use this hair spray?",
      answer: "This product is not recommended for individuals with a known allergy to any of the ingredients, pregnant or breastfeeding women, or individuals under 18."
    }
  ];

  const stages = [
    {
      title: 'Initial Stage',
      duration: '1–4 Weeks',
      description: 'During this initial stage, the internal process begins, and the hair follicles are being stimulated.',
    },
    {
      title: 'Preliminary Growth',
      duration: '4–10 Weeks',
      description: 'Now you will begin to see the initial progress and regrowth of "peach fuzz" on the scalp.',
    },
    {
      title: 'Continued Progress',
      duration: '3–6 Months',
      description: 'With consistent use of UBRestore, you will notice an increase in hair density, thickness and overall improved hair health.',
    },
    {
      title: 'Maintenance',
      duration: '6–12 Months',
      description: 'Keep using UBRestore and enjoy the new you! Discuss adjustments to your treatment plan with your provider, as needed.',
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
              The easiest and most effective way to help you prevent hair loss.
            </h5>
            <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
              For thicker and healthier hair
            </h2>

            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                <b>
                  Just two sprays, twice a day, prescription hair growth that's physician approved.
                </b>
              </p>
              <p>
                Commit to a new you for as little as <strong className="text-gray-900 dark:text-white">$1/day.</strong>
              </p>
              <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
                Includes:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Prevents continued hair loss",
                  "Stimulates hair follicle growth",
                  "Easy topical application",
                  "Results in 3-6 months",
                  "FSA/HSA approved",
                  "A solution designed for women and men",
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
            Discover fuller, thicker, more vibrant hair from our exclusive treatment.
          </h2>
          <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              <strong className="text-gray-900 dark:text-white">UBRestore</strong> is a unique combination of topical Minoxidil (generic for Rogaine®), Finasteride (generic for Propecia®), Latanoprost, and Ketoconazole.
            </p>
            <p>
              Topical formulation means little to no side effects of the active ingredient Finasteride. Usually, these side effects occur with those taking oral treatment.
            </p>
            <p>
              Latanoprost works synergistically with Finasteride to promote hair growth by stimulating hair follicles. The full effects of Latanoprost are realized within 3 to 6 months.
            </p>
            <p>
              The addition of Ketoconazole helps eliminate underlying fungal infections and dandruff. It further assists in avoiding irritation and scabbing that may occur when topical Finasteride is applied by itself or in combination with Minoxidil.
            </p>
          </div>
        </div>
      </section>

      {/* Hair Growth Timeline Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            UBRestore Hair Growth Timeline
          </h2>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <button
                  onClick={() => toggleStage(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{stage.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stage.duration}</p>
                  </div>
                  {activeIndex === index ? 
                    <FaChevronUp className="text-gray-600 dark:text-gray-300" /> : 
                    <FaChevronDown className="text-gray-600 dark:text-gray-300" />
                  }
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="px-6 pb-5 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{stage.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200 border border-gray-200 dark:border-gray-700"
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
    </>
  );
};

export default Hairs;