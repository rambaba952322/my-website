import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, MapPin, Phone, Mail, MessageCircle, Send, Youtube } from 'lucide-react';
import CopyButton from './CopyButton.jsx';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'AI Course', path: '/ai-course' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61559349666549', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/the.americanacademy?igsh=MXdyeWpoa2c2cWVveQ==', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@americanacademyrrc?si=G5Xsuhuu5hTzDZys', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/918709152874', label: 'WhatsApp' },
    { icon: Send, href: 'https://t.me/theamericanacademyrrc', label: 'Telegram' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="font-bold text-lg">The American Academy</span>
            </div>
            <p className="text-sm leading-relaxed">
              Building careers through quality computer education and professional training programs
            </p>
          </div>

          <div>
            <span className="font-semibold text-base mb-4 block">Quick links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-base mb-4 block">Contact us</span>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                
                {/* 🔥 UPDATED PART (Address clickable link) */}
                <a
                  href="https://maps.app.goo.gl/WmXy13MgoMXcqyza8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 leading-relaxed hover:text-primary transition-colors duration-200"
                >
                  2nd Floor, Ashutosh Bhawan, Behind Hotel City Palace, Near S.B.I Bank, Circular Road Lalpur, Ranchi, Jharkhand 834001
                </a>

                <CopyButton text="2nd Floor, Ashutosh Bhawan, Behind Hotel City Palace, Near S.B.I Bank, Circular Road Lalpur, Ranchi, Jharkhand 834001" />
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1">+91 8709152874</span>
                <CopyButton text="+91 8709152874" />
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1">theamericanacademy874@gmail.com</span>
                <CopyButton text="theamericanacademy874@gmail.com" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 The American Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 hover:bg-accent rounded-lg transition-all duration-200"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="flex justify-center gap-4 text-sm">
            <Link to="/Privacy-Policy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/Terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;