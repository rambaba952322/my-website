import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import CourseCard from '../components/CourseCard.jsx';

const CoursesPage = () => {
  const professionalCourses = [
    {
      title: 'ADCA',
      description: 'Advanced Diploma in Computer Applications covering essential software, programming, and office automation skills.',
    },
    {
      title: 'DCA/DTP',
      description: 'Diploma in Computer Applications & Desktop Publishing focusing on fundamental computer skills, office productivity, and professional design.',
    },
    {
      title: 'Tally & GST',
      description: 'Comprehensive training in Tally Prime and GST compliance for professional accounting and financial management.',
    },
    {
      title: 'Python Programming',
      description: 'Master Python from basics to advanced concepts including data structures, OOP, and real-world applications.',
    },
    {
      title: 'Java Development',
      description: 'Comprehensive Java programming course covering core concepts, frameworks, and enterprise application development.',
    },
    {
      title: 'C & C++ Programmings',
      description: 'Master foundational programming concepts, object-oriented programming, and memory management with C and C++.',
    },
  ];

  const additionalPrograms = [
    {
      title: 'Typing Speed Enhancement',
      description: 'Improve your typing speed and accuracy with structured practice sessions and professional techniques.',
    },
    {
      title: 'English Spoken Course',
      description: 'Build confidence in spoken English with practical conversation practice and grammar fundamentals.',
    },
    {
      title: 'Academics (6th - 12th)',
      description: 'Comprehensive academic support and tutoring for students from 6th to 12th grade across major subjects.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Courses - The American Academy</title>
        <meta name="description" content="Explore our comprehensive range of computer training programs including ADCA, DCA/DTP, Python, Java, AI, and more." />
      </Helmet>

      <Header />

      <main>
        <section className="py-20 bg-gradient-to-b from-background to-secondary/60">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Our programs
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose from our wide range of professional courses designed to build your skills and advance your career
              </p>
            </motion.div>
          </div>
        </section>

       <section className="py-20">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured program
      </h2>

      <div className="max-w-2xl mx-auto space-y-8">

        {/* 🔥 SSC PREPARATION CARD */}
        <ProgramCard
          title="SSC Preparation"
          description={
            <>
              Complete preparation for SSC exams including <strong>CPO, CHSL, Stenographer, CGL, and GD</strong>. 
              Structured learning, practice tests, and expert guidance to help you crack government exams confidently.
              
              <div className="mt-4 p-4 rounded-lg bg-secondary border">
                <p className="font-semibold mb-2 text-primary">
                  🚀 Interview Booster Skills too..
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Communication & Confidence Building</li>
                  <li>• Mock Interview Sessions</li>
                  <li>• Personality Development</li>
                  <li>• Resume & Presentation Skills</li>
                </ul>
              </div>
            </>
          }
          badge="Popular Program"
          ctaText="Apply now"
          ctaLink="/contact-page"
        />

        {/* 🔥 GENERATIVE AI CARD */}
        <ProgramCard
          title="Generative AI Mastery"
          description="Master the fundamentals of artificial intelligence and machine learning. Learn to build, train, and deploy AI models with hands-on projects and real-world applications."
          price="₹19,999/-"
          originalPrice="₹24,999/-"
          discount="Save 20% with our limited-time offer"
          badge="Special Offer"
          ctaText="Explore course curriculum"
          ctaLink="/ai-course"
        />

      </div>
    </motion.div>
  </div>
</section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Professional courses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry-standard programs to build your technical expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <CourseCard {...course} />
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
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Additional programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhance your professional skills with our specialized training
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <CourseCard {...program} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CoursesPage;