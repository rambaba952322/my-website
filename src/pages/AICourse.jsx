import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Brain, Database, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeatureCard from '../components/FeatureCard.jsx';

// ✅ Background image
import aiBg from '../assets/background/AI.png';

const AICourse = () => {
  const features = [
    {
      icon: Brain,
      title: 'Vibe Coding',
      description: 'Understand core algorithms, and how to apply them to build real-world apps.',
    },
    {
      icon: Cpu,
      title: 'Prompt Mastering',
      description: 'Master wordings, text generation and architectures for advanced AI applications.',
    },
    {
      icon: Database,
      title: 'Web Development',
      description: 'Learn to clean, transform, and prepare data for building web applications.',
    },
    {
      icon: Rocket,
      title: 'Explore AI',
      description: 'Deploy your AI models to production environments and integrate them into real applications.',
    },
  ];

  const learningPoints = [
    'Advance Video Generations With AI',
    'Work with popular frameworks, 25+ AI tools',
    'Implement natural language processing solutions',
    'Create computer vision applications',
  ];

  return (
    <>
      <Helmet>
        <title>Generative AI Mastery Course - The American Academy</title>
        <meta name="description" content="Master artificial intelligence and machine learning with our comprehensive AI course at The American Academy. Special offer: Save 20% on enrollment." />
      </Helmet>

      <Header />

      <main>

        {/* ✅ HERO SECTION — AI.png as full background */}
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            backgroundImage: `url(${aiBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Subtle overlay so text stays readable while image is clearly visible */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Special Offer Active
              </Badge>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
                style={{ letterSpacing: '-0.02em' }}
              >
                Artificial Intelligence
              </h1>
              <div className="flex items-baseline justify-center gap-4 mb-6">
                <span className="text-3xl text-muted-foreground line-through">₹24,999/-</span>
                <span className="text-5xl font-bold text-primary">₹19,999/-</span>
              </div>
              <p className="text-lg text-gray-600 mb-2">Save 20% with our limited-time offer</p>
              <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-gray-700">
                Master the fundamentals of artificial intelligence and machine learning. Build, train, and deploy AI models with hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="transition-all duration-200 active:scale-[0.98]">
                    Enroll now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/70 transition-all duration-200 active:scale-[0.98]">
                    Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ✅ COURSE OVERVIEW */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Course overview</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive curriculum covering all aspects of modern AI and machine learning
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <FeatureCard {...feature} variant="muted" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ WHAT YOU'LL LEARN */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What you'll learn</h2>
              <div className="space-y-6">
                {learningPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to shape the future?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join our AI mastery program and gain the skills to build intelligent systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                    Enroll now for ₹19,999/-
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98]">
                    Explore other courses
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AICourse;