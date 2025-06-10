import { useState } from 'react';
import PropTypes from 'prop-types';

const faqs = [
  {
    question: 'What is UBI Telehealth?',
    answer: 'UBI is an online platform that connects you directly with licensed healthcare professionals. Through our system, you can work on a personalized treatment plan delivered straight to your door.',
  },
  {
    question: 'Who are the providers of UBI Telehealth?',
    answer: 'UBI Telehealth providers are US trained, US board-certified physicians, licensed to provide care in your state.',
  },
  {
    question: 'How long will it take to receive my order?',
    answer: 'The prescription is sent electronically upon approval to our affiliate pharmacy. Most are fulfilled no later than the following business day, and shipped shortly thereafter...',
  },
  {
    question: 'What is your return policy?',
    answer: 'We have a return policy for damaged or incorrect orders. Please contact our team at customerservice@ubitelehealth.com. Prescriptions cannot be returned due to patient safety and legal regulations...',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, once your order is shipped, we will send you updates within your account and you can track it in the patient portal.',
  },
  {
    question: 'What if I have questions about my medications and need advice?',
    answer: 'Our clinicians are available to answer your questions and provide guidance. Contact customer support any time.',
  },
  {
    question: 'Is insurance required for UBI Telehealth?',
    answer: 'No, insurance is not required. We offer transparent pricing that includes telehealth consultation, shipments, and messaging. FSA/HSA and credit cards are accepted.',
  },
  {
    question: 'Can I use my FSA/HSA card to purchase?',
    answer: 'Yes! FSA/HSA cards are accepted for medication purchases.',
  },
  {
    question: 'What states is UBI Telehealth available in?',
    answer: 'We provide services in all states except: Alabama, Alaska, Arkansas, Delaware, Hawaii, Maine, Mississippi, Oklahoma, South Carolina, South Dakota, and Wyoming.',
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        <span className="font-semibold text-lg">{question}</span>
        <span className="text-xl font-bold">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const FaqPage = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">FAQs</h1>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
