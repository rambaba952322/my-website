import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const ProgramCard = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  discount, 
  badge,
  ctaText = 'Explore course curriculum',
  ctaLink = '/contact'
}) => {
  return (
    <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {badge && (
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {badge}
        </Badge>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      {price && (
        <div className="mb-4">
          <div className="flex items-baseline gap-3">
            {originalPrice && (
              <span className="text-2xl text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold text-primary">{price}</span>
          </div>
          {discount && (
            <p className="text-sm text-muted-foreground mt-1">{discount}</p>
          )}
        </div>
      )}
      
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      
      <Link to={ctaLink}>
        <Button className="w-full transition-all duration-200 active:scale-[0.98]">
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};

export default ProgramCard;