import React from 'react';

const galleryItems = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Banner Image - replace with your actual image component */}
      <div className="banner-container mb-8">
        <img 
          src="src/assets/img-1.jpg" 
          alt="Why Some People May Not Lose Weight While on Semaglutide" 
          className="w-full rounded-lg shadow-md" 
        />
      </div>

      <h1 className="font-poppins text-4xl md:text-5xl font-medium tracking-wide leading-tight mb-6 text-left">
        Why Some People May Not Lose Weight While on Semaglutide
      </h1>

      <p className="text-lg mb-6">
        Semaglutide, a medication in the GLP-1 family, has helped many people successfully lose weight by suppressing appetite, improving feelings of fullness, and increasing insulin sensitivity. It can be a powerful tool for those looking to shed pounds and improve their health. However, while it works for many, not everyone experiences the same level of success with weight loss.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          1. Individual Differences in Response to Medication
        </h2>
        <p className="text-lg mb-4">
          One of the main reasons some people don't lose weight with semaglutide is that not everyone's body responds the same way to medication. Genetic factors play a big role in how the body reacts to treatments like semaglutide. For some people, the appetite-suppressing and insulin-regulating effects of the medication might not be as strong, meaning they don't experience the same level of weight loss.
        </p>
        <p className="text-lg">
          Additionally, factors like body composition and metabolism can also impact results. People with a slower metabolism or those who carry more muscle mass may find that weight loss happens more slowly or doesn't happen at all.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          2. Dosage Issues
        </h2>
        <p className="text-lg">
          Another reason for a lack of weight loss could be related to the dosage of semaglutide. If the dosage isn't quite right for you, it might not work as effectively. A dose that's too low may not produce noticeable results, while a dose that's too high could cause unwanted side effects. Your doctor will adjust the dosage over time to find the right balance for you, so it's important to stay in touch with them during the process.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          3. Underlying Health Conditions
        </h2>
        <p className="text-lg mb-4">
          Certain health conditions can make it harder to lose weight, even with semaglutide. For example, thyroid disorders like hypothyroidism can slow metabolism and interfere with weight loss. Hormonal imbalances, such as insulin resistance or conditions like polycystic ovary syndrome (PCOS), can also make it more difficult for your body to shed pounds.
        </p>
        <p className="text-lg">
          Other factors, like chronic stress or poor sleep, can affect your hormones and metabolism, further complicating weight loss. If you have any of these conditions, it's important to work closely with your doctor to manage them alongside your weight loss goals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          4. Lifestyle Factors
        </h2>
        <p className="text-lg mb-4">
          While semaglutide helps with appetite control, it's not a magic solution. Your diet and physical activity level play a huge role in whether or not you'll lose weight. If you're eating high-calorie, processed foods, or eating more than your body needs, weight loss can be difficult—even with the help of medication. A healthy, balanced diet, along with regular exercise, is key to seeing results.
        </p>
        <p className="text-lg">
          If you're not physically active, this can also impact your weight loss. Exercise supports metabolism and helps your body burn calories. Combining semaglutide with exercise and a balanced diet is the best way to ensure success.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          5. Non-Compliance or Inconsistent Use
        </h2>
        <p className="text-lg">
          Another reason why semaglutide might not be working is inconsistent use. If you forget to take the medication or stop taking it altogether, it won't be effective. It's essential to follow your doctor's instructions on when and how to take the medication to get the full benefit. If you're having trouble keeping up with your treatment plan, let your doctor know so they can help you stay on track.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          6. Psychological Factors
        </h2>
        <p className="text-lg mb-4">
          Emotional eating or stress eating can also interfere with weight loss, even when using semaglutide. The medication helps suppress your appetite, but it doesn't address the emotional triggers that may lead to overeating. It's important to be mindful of your eating habits and consider seeking support if emotional eating is a concern.
        </p>
        <p className="text-lg">
          Additionally, it's important to have realistic expectations. Weight loss with semaglutide can take time, and some people may experience slower progress than others. Be patient with the process and keep a long-term focus on your health rather than just the number on the scale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-blue-300 dark:text-blue-500">
          7. Weight Loss Plateaus
        </h2>
        <p className="text-lg">
          It's also common to hit a weight loss plateau after some initial progress. Your body may adjust to the changes, causing weight loss to slow down or stop temporarily. This doesn't mean semaglutide isn't working—it just means your body needs time to stabilize. During this phase, talk to your doctor about how to adjust your approach, whether it's through diet, exercise, or slight changes in dosage.
        </p>
      </section>

      <h1 className="font-poppins text-4xl md:text-5xl font-medium tracking-wide leading-tight mb-6 mt-12">
        Final Thoughts
      </h1>
      <p className="text-lg mb-10">
        Semaglutide is a powerful tool for weight loss, but it's not a one-size-fits-all solution. If you're not seeing the results you expect, it's important to consider factors like genetics, dosage, underlying health conditions, lifestyle, and emotional factors. Remember, weight loss is a complex process, and success usually requires a combination of medication, healthy habits, and time. Work closely with your healthcare provider to find the right approach for you, and stay focused on improving your overall health, not just the number on the scale.
      </p>

      <a 
        href="/login" 
        className="inline-block mt-12 px-8 py-3 text-xl font-semibold text-blue-300 dark:text-blue-500 bg-transparent border-2 border-blue-300 dark:border-blue-500 rounded-md cursor-pointer no-underline transition-colors duration-300 hover:bg-blue-300 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 text-center"
        aria-label="Begin Your Journey"
      >
        Begin Your Journey
      </a>
    </div>
  );
};

export default galleryItems;