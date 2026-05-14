import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, variant = 'default' }) => {
  const variants = {
    default: 'bg-card border shadow-sm hover:shadow-md',
    muted: 'bg-muted',
    minimal: 'border-b pb-6',
  };

  return (
    <div className={`${variants[variant]} rounded-xl p-6 transition-all duration-300 h-full flex flex-col`}>
      {Icon && (
        <div className="mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;