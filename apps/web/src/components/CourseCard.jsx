import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const CourseCard = ({ title, description, link = '/contact' }) => {
  return (
    <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="mt-auto">
        <Link to={link}>
          <Button variant="outline" className="w-full group transition-all duration-200 active:scale-[0.98]">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;