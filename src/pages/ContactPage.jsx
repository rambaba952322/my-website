import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import CopyButton from '../components/CopyButton.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '2nd Floor, Ashutosh Bhawan, Behind Hotel City Palace, Near S.B.I Bank, Circular Road Lalpur, Ranchi, Jharkhand 834001',
      copyable: true,
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 75418 04860',
      copyable: true,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'theamericanacademy874@gmail.com',
      copyable: true,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Monday - Saturday: 7:00 AM - 8:30 PM',
      copyable: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - The American Academy</title>
        <meta name="description" content="Get in touch with The American Academy. Contact us for course inquiries, enrollment information, or any questions." />
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
                Contact us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our courses? We're here to help you start your learning journey
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{info.content}</p>
                        </div>
                        {info.copyable && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <CopyButton text={info.content} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border rounded-2xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;