import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button.jsx';
import { Award, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeatureCard from '../components/FeatureCard.jsx';

// ✅ images
import raj from '../assets/instructors/raj.jpg';
import neha from '../assets/instructors/neha.jpg';
import shashi from '../assets/instructors/shashi.jpg';
import sanu from '../assets/instructors/sanu.jpg';
import aniket from '../assets/instructors/aniket.jpg';
import falguni from '../assets/instructors/falguni.jpg';
import homeb from '../assets/background/homeb.png';

// ✅ instructors data
const instructors = [
  { name: "Raj Choudhary", subject: "English Speaking", image: raj },
  { name: "Neha Kumari", subject: "Shorthand & Computer", image: neha },
  { name: "Shashi Kumar", subject: "Reasoning Faculty", image: shashi },
  { name: "Sanu Kumar", subject: "GD Faculty", image: sanu },
  { name: "Aniket Kumar", subject: "Shorthand & Steno Faculty", image: aniket },
  { name: "Falguni Kumari", subject: "Academics", image: falguni },
];

const features = [
  {
    icon: Users,
    title: 'Expert instructors',
    description: 'Learn from industry professionals with years of practical experience in computer science and technology.',
  },
  {
    icon: BookOpen,
    title: 'Hands-on training',
    description: 'Gain practical skills through project-based learning and real-world applications.',
  },
  {
    icon: Award,
    title: 'Industry certifications',
    description: 'Earn recognized certifications that boost your career prospects and validate your expertise.',
  },
];

const HomePage = () => {

  // ✅ CAROUSEL LOGIC
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % instructors.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [autoPlay, current]);

  const goTo = (index) => {
    setCurrent(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const goPrev = () => goTo((current - 1 + instructors.length) % instructors.length);
  const goNext = () => goTo((current + 1) % instructors.length);

  return (
    <>
      <Helmet>
        <title>The American Academy - Professional Computer Training</title>
        <meta name="description" content="Build your career with professional computer training and industry-recognized certifications at The American Academy." />
      </Helmet>

      <Header />

      <main>

        {/* ✅ HERO SECTION — WITH BACKGROUND IMAGE */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${homeb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-black/0" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
                The American Academy
              </h1>
              <p className="text-grey/85 text-lg mb-10">
                Build your career with professional computer training, Industry-recognized certifications and expert-led courses to help you succeed in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg">Explore courses</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 border-0">
                  Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ✅ WHY CHOOSE US — RESTORED */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive training programs designed to prepare you for success in the technology industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ MEET OUR INSTRUCTORS — CAROUSEL */}
        <section className="py-20 bg-secondary">
          <div className="container">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet our instructors
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn from experienced professionals who are passionate about teaching
              </p>
            </motion.div>

            {/* ✅ CAROUSEL CARD */}
            <div className="relative max-w-sm mx-auto">

              {/* Prev Button */}
              <button
                onClick={goPrev}
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition z-10"
                aria-label="Previous instructor"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Card */}
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-card border rounded-2xl p-8 shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={instructors[current].image}
                    alt={instructors[current].name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  {instructors[current].name}
                </h3>
                <p className="text-primary font-medium">
                  {instructors[current].subject}
                </p>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition z-10"
                aria-label="Next instructor"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* ✅ DOT INDICATORS */}
            <div className="flex justify-center gap-2 mt-8">
              {instructors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to instructor ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ✅ CTA */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground rounded-2xl p-12 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start your journey?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of students who have transformed their careers with our training programs
              </p>
              <Link to="/courses">
                <Button size="lg" variant="secondary">
                  View all courses
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default HomePage;