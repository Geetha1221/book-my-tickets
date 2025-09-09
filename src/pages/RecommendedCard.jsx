import React from 'react';

const recommendedData = [
  {
    id: 1,
    title: "Superman",
    genre: "Action/Adventure/Fantasy/Sci-Fi",
    rating: "8.2/10",
    votes: "22.6K Votes",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyMi42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397464-wwmrmxurzm-portrait.jpg",
  },
  {
    id: 2,
    title: "Jurassic World: Rebirth",
    genre: "Action/Sci-Fi/Thriller",
    rating: "7.5/10",
    votes: "47.6K Votes",
    img: "https://m.media-amazon.com/images/M/MV5BMDE1N2EzMjAtMDY1My00YWE5LWEyYjYtYmE3YjZjNzQwNDhmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 3,
    title: "Junior",
    genre: "Action/Drama/Family",
    rating: "9.5/10",
    img: "https://m.media-amazon.com/images/M/MV5BNzM4MzU5ZGUtMWNmOS00MGYwLTk0MWItZTE4NzMzNzQyNGYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 4,
    title: "Maalik",
    genre: "Action/Crime/Drama/Period",
    rating: "8.1/10",
    votes: "9K Votes",
    img: "https://m.media-amazon.com/images/M/MV5BMWY5ZjlmZmItNjQ4Ni00ZjEwLWJhNTYtODg2ZDA5MWI3YzRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 5,
    title: "F1: The Movie",
    genre: "Action/Drama/Sports",
    rating: "9.5/10",
    votes: "94.1K Votes",
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/F1_The_Movie_Theatrical_Poster.jpg",
  },
];

const RecommendedCard = () => {
  return (
    <div className="recommended-container">
      <h2 className="title">Recommended Movies</h2>
      <div className="card-list">
        {recommendedData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-info">
              {item.rating ? (
                <div className="rating">★ {item.rating} • {item.votes}</div>
              ) : (
                <div className="likes">👍 {item.likes}</div>
              )}
              <h3 className="movie-title">{item.title}</h3>
              <p className="genre">{item.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCard;
