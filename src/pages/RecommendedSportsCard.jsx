import React from 'react';

const recommendedSports = [
  {
    id: 1,
    title: "India vs Australia",
    genre: "Cricket • ODI Series",
    rating: "9.1/10",
    votes: "76.2K Votes",
    img: "https://i.redd.it/dxnpj0vtwame1.jpeg",
  },
  {
    id: 2,
    title: "Champions League Final",
    genre: "Football • UEFA",
    rating: "8.9/10",
    votes: "65.4K Votes",
    img: "https://pbs.twimg.com/media/E1QuzB3XMAEcNCU.jpg",
  },
  {
    id: 3,
    title: "India vs England",
    genre: "Cricket • Test Series",
    rating: "9.1/10",
    votes: "76.2K Votes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCO_EzUjtqdXZeS6Vh3MEdIVkzmZqxk1XEg&s",
  },
  {
    id: 4,
    title: "Pro Kabaddi League",
    genre: "Kabaddi • National League",
    rating: "8.3/10",
    votes: "33.1K Votes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VZsYY9Jvrrlshqr4hawdnIJJktm9qrPVjQ&s",
  },
   {
    id: 5,
    title: "India vs England",
    genre: "Cricket • Test Series",
    rating: "9.1/10",
    votes: "76.2K Votes",
    img: "https://pbs.twimg.com/media/GEM2Pi4aYAAW7cU.jpg:large",
  },
];

const RecommendedSportsCard = () => {
  return (
    <div className="recommended-container">
      <h2 className="title">Recommended Sports</h2>
      <div className="recommended-scroll-wrapper">
        <div className="card-list">
          {recommendedSports.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.title} className="card-img" />
              <div className="card-info">
                <div className="rating">★ {item.rating} • {item.votes}</div>
                <h3 className="movie-title">{item.title}</h3>
                <p className="genre">{item.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSportsCard;
