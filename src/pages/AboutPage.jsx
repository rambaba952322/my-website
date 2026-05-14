import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Users, BookOpen } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ValueCard from '../components/ValueCard.jsx';
import raj from '../assets/instructors/raj.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Quality education',
      description: 'We maintain the highest standards in curriculum design and teaching methodology.',
    },
    {
      icon: Target,
      title: 'Career focused',
      description: 'Our programs are designed to prepare students for real-world job opportunities.',
    },
    {
      icon: Users,
      title: 'Expert instructors',
      description: 'Learn from professionals with extensive industry experience and teaching expertise.',
    },
    {
      icon: Award,
      title: 'Recognized certifications',
      description: 'Earn credentials that are valued by employers across the technology sector.',
    },
  ];

  const instructors = [
    { name: "Raj Choudhary", subject: "English Speaking", image: raj }
  ];

  const benefits = [
    'Experienced faculty with industry backgrounds',
    'Modern infrastructure and learning facilities',
    'Flexible learning schedules to fit your lifestyle',
    'Career support and placement assistance',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The American Academy</title>
        <meta name="description" content="Learn about The American Academy's mission to provide quality computer education and professional training programs." />
      </Helmet>

      <Header />

      <main>
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/60">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                About The American Academy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                No.1 Training Institute in India. With more than 800+ Centres and 5000+ Students taught.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto bg-card border rounded-2xl shadow-sm p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <img
                    src={raj}
                    alt="Raj Choudhary, CEO of The American Academy"
                    className="w-40 h-40 rounded-xl object-cover shadow-md"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-2">Raj Choudhary</h2>
                  <p className="text-lg text-primary font-semibold mb-3">Faculty English Speaking</p>
                  <p className="text-lg font-semibold text-foreground">C.E.O. of The American Academy</p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    With a passion for education and technology, Raj Choudhary leads The American Academy with a vision to empower students through quality training and industry-relevant skills development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our mission</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The American Academy is dedicated to providing high-quality computer education that empowers students to succeed in the digital age. We believe that technology skills are essential for career growth and personal development.
                  </p>
                  <p>
                    Our comprehensive training programs combine theoretical knowledge with practical, hands-on experience. We focus on industry-relevant skills that prepare our students for real-world challenges and opportunities in the technology sector.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-muted rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">What we offer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From foundational computer courses to advanced programming and AI training, we provide a complete learning pathway. Our courses are designed by industry experts and updated regularly to reflect current technology trends and employer requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our approach to education and student success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <ValueCard {...value} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why choose us</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-4 pb-6 border-b last:border-b-0"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed pt-2">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;