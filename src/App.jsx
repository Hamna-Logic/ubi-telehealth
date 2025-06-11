import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Videos from "./components/Videos/Videos.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Images from "./components/Images/Images.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ExploreUBI from "./components/Services/Services.jsx";
import Hairs from "./components/Services/HairLoss.jsx";
import Health from "./components/Services/Health.jsx";
import Weight from "./components/Services/WeightLoss.jsx";

import About from "./components/About/About.jsx";
import Gallery from "./components/Learn/Learn.jsx";
import Detail from "./components/Learn/Detail.jsx"; 
import SupportSection from "./components/Contact/Contact.jsx";
import Faqpage from "./components/Faqpage/Faqpage";
import AuthForm from "./components/SignIn/SignIn.jsx";


import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <Navbar />

        <Routes>
          <Route
  path="/"
  element={
    <>
      <Hero />
      <Videos />
      <Banner />
      <Images />
    </>
  }
/>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqpage />} />
          <Route path="/learn-more" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<SupportSection />} />
          <Route path="/explore-ubi" element={<ExploreUBI />} />
          <Route path="/services/Hairs" element={<Hairs />} />
          <Route path="/services/Health" element={<Health />} />
          <Route path="/services/Weight" element={<Weight />} />
          <Route path="/login" element={<AuthForm />} />
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;