import React from 'react';
import './favoritecards.css';

const FavoriteCards = ({ title, description, image }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="favorite-card" style={{ backgroundImage: `url(${image})` }} onClick={toggleDescription}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div style={{ display: showDescription ? 'block' : 'none', opacity: showDescription ? 1 : 0 }} className={showDescription ? 'fade-in' : ''}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FavoriteCards;