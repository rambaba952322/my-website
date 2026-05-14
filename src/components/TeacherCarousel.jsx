import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeacherCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teachers = [
    { emoji: '🐍', name: 'Teacher 1', course: 'Python' },
    { emoji: '☕', name: 'Teacher 2', course: 'Java' },
    { emoji: '⚙️', name: 'Teacher 3', course: 'C++' },
    { emoji: '🤖', name: 'Teacher 4', course: 'AI/ML' },
    { emoji: '🌐', name: 'Teacher 5', course: 'Web Development' },
    { emoji: '🗄️', name: 'Teacher 6', course: 'Database Design' },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teachers.length - 1 ? 0 : prev + 1));
  };

  const currentTeacher = teachers[currentIndex];

  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-card border rounded-2xl p-12 shadow-lg text-center transition-all duration-300">
        <div className="text-7xl mb-6">{currentTeacher.emoji}</div>
        <h3 className="text-2xl font-bold mb-2">{currentTeacher.name}</h3>
        <p className="text-lg text-muted-foreground">{currentTeacher.course}</p>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="transition-all duration-200 active:scale-[0.98]"
          aria-label="Previous teacher"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="transition-all duration-200 active:scale-[0.98]"
          aria-label="Next teacher"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {teachers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
            }`}
            aria-label={`Go to teacher ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherCarousel;