import FavoriteCards from './favoritecards';
import React, {useState} from 'react';
import './favorites.css';
import icelandfav from './favoriteimgs/iceland.jpg';
import elnidofav from './favoriteimgs/elnido.jpg';
import hoianfav from './favoriteimgs//hoian.jpg';
import cambodiafav from './favoriteimgs/cambodia.jpg';
import balifav from './favoriteimgs/bali.jpg';
import travelfav from './favoriteimgs/train.jpg';
import safarifav from './favoriteimgs/safari.jpg';
import ottersfav from './favoriteimgs/otter.jpg';
import puppiesfav from './favoriteimgs/puppies.jpg';

const favorites = [
  {
    title: 'Favorite Place',
    description: "Iceland! This place was amazing and we want to go back to explore more! Waterfalls, glaciers, and black sand beaches, what's not to love?",
    image: icelandfav,
  },
  {
    title: 'Favorite Beach',
    description: 'El Nido, Palawan, Philipines! The beaches here were so clean with beautiful white sand and crystal clear water. We also got to go island hopping and snorkeling!',
    image: elnidofav,
  },
  {
    title: 'Favorite Food',
    description: 'Bahn Mi in Hoi An, Vietnam! This was a simple one, but was so good for some reason',
    image: hoianfav,
  },
  {
    title: 'Favorite Thing We Did',
    description: "This is a hard one... We've seen so many amazing things and done so many amazing things. But if we had to pick one, it would be...The Safari in South Africa!",
    image: safarifav,
  },
  {
    title: 'Favorite Way to Travel',
    description: "This is probably the easiest one. Travel by Train through Europe is amazing!!!!! So much easier than flying and you get to see so much more!",
    image: travelfav,
  },
  {
    title: 'Favorite Experience',
    description: 'Kind of a cheat, but the tour through Cambodia!  Technically it was a bunch of experiences, but it was all one tour. We got to see so many amazing things and learn so much about the history of Cambodia. We also got to meet some amazing people!',
    image: cambodiafav,
  },
  {
    title: "Favorite Day We've Had Together",
    description: "Picking one day is really hard... But for us it would be a day in Bali going to a couple waterfalls.  They we Grogeous! And we were with some fun people!",
    image: balifav,
  },
  {
    title: "Favorite Pet We Met",
    description: "The otters in Bali! They were so cute and fun to watch!",
    image: ottersfav,
  },  {
    title: "Favorite Wild Animals",
    description: "The Pack of puppies we that joined us on a 2 hr hike in Bansko!! Not sure if this counts, but they came to us in the wild. ",
    image: puppiesfav,
  },
];

const FavoritesSection = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
      
        const deltaX = e.pageX - startX;
        const favoritesContainer = document.querySelector('.favorites-container');
        const currentScrollLeft = favoritesContainer.scrollLeft;
        const maxScrollLeft = favoritesContainer.scrollWidth - favoritesContainer.offsetWidth;
      
        // Schedule the scroll update using requestAnimationFrame
        requestAnimationFrame(() => {
          // Calculate the new scroll position
          const newScrollLeft = currentScrollLeft - deltaX / 50;
      
          // Prevent scrolling beyond the minimum and maximum positions
          if (newScrollLeft >= 0 && newScrollLeft <= maxScrollLeft) {
            favoritesContainer.scrollLeft = newScrollLeft;
          }
        });
      };

    return (
      <div className="favorites-section">
        <h2>Some of our favorites things!</h2>
        <h4>(Click to reveal)</h4>
        <div
          className="favorites-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ touchAction: 'pan-x' }} // Enable touch-based dragging
        >
          {favorites.map((favorite) => (
            <FavoriteCards
              key={favorite.title}
              title={favorite.title}
              description={favorite.description}
              image={favorite.image}
            />
          ))}
        </div>
        <h4>(&larr; Scroll to see more &rarr;)</h4>
      </div>
    );
  };

export default FavoritesSection;