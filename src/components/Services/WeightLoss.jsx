import { useRef, useEffect } from "react";
import VIDEO from "../../assets/WeightLoss.mp4";
import VIDEO2 from "../../assets/WeightLoss-2.mp4";
import VIDEO3 from "../../assets/WeightLoss-3.mp4";
import IMAGE1 from "../../assets/weight-1.jpeg";
import IMAGE2 from "../../assets/weight-2.jpeg";
import IMAGE3 from "../../assets/weight-3.jpeg";
import IMAGE4 from "../../assets/weight-4.jpeg";
import IMAGE5 from "../../assets/weight-5.jpeg";

const Weight = () => {
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
      question: "How does the UBI process work?",
      answer: "Start by filling out the solution questionnaire, once complete, it will be reviewed by one of our many board-certified physicians and you will receive a message back from them in our secure portal. Once you have decided the best course of action with your physician, you will be sent your prescription via UPS and it should arrive to you in 3-5 days."
    },
    {
      question: "How often will I receive a shipment?",
      answer: "This depends on the medication you are prescribed and how your body tolerates it. You will also get to choose how often you want it delivered to your doorstep."
    },
    {
      question: "How much weight can I expect to lose?",
      answer: "Individuals can generally expect to lose approximately 10% of their body weight within 3 months, depending on their goals. Including an overall healthy lifestyle with this medication will be your key to long-term successful weight management."
    },
    {
      question: "What are the common side effects of taking semaglutide?",
      answer: "Some side effects may include nausea, vomiting and diarrhea and should subside after a few weeks of starting the medication. As with any prescription medication, your UBI physician has seen the benefits of the medication outweigh the side effects."
    },
    {
      question: "How long before I start seeing results?",
      answer: "You will start to notice weight loss during Month 2 of your injections."
    },
     {
      question: "How much does semaglutide cost per month after the initial first two-month special?",
      answer: "Pricing after the first two-months is billed at $260 each month. As a reminder you can use FSA/HSA dollars to purchase."
    }
  ];


  const videos = [
    {
      id: 1,
      title: "Semaglutide: The UBI Difference",
      videoSrc: VIDEO2,
      description: "Learn how our Semaglutide program stands out with physician oversight, genuine medication, and comprehensive support.",
      features: [
        "Board-Certified Physician review and prescribe medication",
        "Direct from US-based manufacturers (non-compounded)",
        "Reduce your caloric intake by regulating GLP-1 hormones, reducing appetite",
        "Providing you the active ingredient in brand name weight loss solutions such as Ozempic® and Wegovy® at an affordable price",
        "Semaglutide in a once weekly injection given at home"
      ]
    },
    {
      id: 2,
      title: "How to Administer Your Treatment",
      videoSrc: VIDEO3,
      description: "Step-by-step guide to properly administering your weekly Semaglutide injections for optimal results.",
      features: [
        "There may be several reasons why you have been considering a health journey that contains the revolutionary GLP-1 supplement, semaglutide. Know that you’re not alone—and it’s okay to want to learn more before committing to this medication. Whether it’s a few extra pounds that have snuck up over the years or looking to overcome some health risks as you get older, finding the right support is key in achieving your personal goals. That’s where semaglutide comes in.",
        "At UBI, semaglutide is more than just a buzzword; it’s a proven, effective option for weight management as part of an overall plan to achieve better health through diet, exercise, and GLP-1 support. Semaglutide mimics a hormone that naturally regulates appetite and digestion, helping you feel fuller longer and reducing the cravings that are calling your name So, why wait? semaglutide is the support you need today to take the next step in your journey to a healthier, happier you. Let’s make those goals a reality—because you deserve to feel your best, inside and out."
      ]
    }
  ];

  const images = [
    {
      id: 1,
      title: "Coming Soon",
      src: IMAGE1,
      
    },
    {
      id: 2,
      title: "Coming Soon",
      src: IMAGE2,
    
    },
    {
      id: 3,
      title: "Coming Soon",
      src: IMAGE3,
      
    },
    {
      id: 4,
      title: "Coming Soon",
      src: IMAGE4,
    
    },
    {
      id: 5,
      title: "Available",
      src: IMAGE5,
   
    }
  ];

  return (
    <>
      <section
        id="about"
        className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      >
        {/* Original Video + Content Section */}
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left - Video Player */}
          <div className="relative basis-[45%] w-full bg-[#4a637a] dark:bg-[#a4bfd4] rounded-xl shadow-lg p-1">
            <video
              ref={videoRef}
              src={VIDEO}
              autoPlay
              muted
              loop
              controls
              className="w-full rounded-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div className="basis-[55%] w-full">
            <h5 className="text-left text-lg font-semibold text-blue-600 dark:text-blue-400">
              NOW IS THE TIME
            </h5>
            <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
             UBI Semaglutide
            </h2>

            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                 Experience the clinically proven way to help you lose weight and keep it off.
              </p>
                <p>
                <b>
                A once a week treatment that reduces cravings, controls your appetite, and reduces your risk of major health concerns including stroke and heart disease.
                </b>
              </p>
              <p>
                Starting at only  <strong className="text-gray-900 dark:text-white">$187.49/month</strong> for your first two months
              </p>
              <h2 className="text-left text-3xl lg:text-4xl font-bold mt-2 mb-4 max-w-xl">
                Includes:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Physician consultation",
                  "Free shipping",
                  "Anti-nausea medication",
                  "Ongoing follow-ups",
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

        {/* Three Video Sections with Side-by-Side Layout */}
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className={`w-[90%] mx-auto mt-16 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
          >
            {/* Video Container */}
            <div className="relative basis-[45%] w-full bg-[#4a637a] dark:bg-[#a4bfd4] rounded-xl shadow-lg p-1">
              <video
                src={video.videoSrc}
                controls
                className="w-full rounded-lg"
              />
            </div>

            {/* Content Container */}
            <div className="basis-[55%] w-full">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {video.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {video.description}
              </p>
              <div className="space-y-3">
                {video.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 mt-1 shrink-0"
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
        ))}

        {/* Five Image Containers Section */}
        <div className="w-[90%] mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Weight Management - Made Easy!
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {images.map((image) => (
              <div 
                key={image.id}
                className="bg-[#4a637a] dark:bg-[#a4bfd4] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-40 bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white dark:text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-200 dark:text-gray-700 mt-1">{image.description}</p>
                </div>
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

export default Weight;