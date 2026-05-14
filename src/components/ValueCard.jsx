import React from 'react';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-muted rounded-xl p-6 h-full flex flex-col">
      {Icon && (
        <div className="mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;