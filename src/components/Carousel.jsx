import { useState } from "react";

function Carousel({ imageUrls }) {
  const [position, setPosition] = useState(0);

  const handleRightClick = () => {
    if (position === imageUrls.length - 1) return setPosition(0);
    setPosition((position) => position + 1);
  };

  const handleLeftClick = () => {
    if (position === 0) return setPosition(imageUrls.length - 1);
    setPosition((position) => position - 1);
  };

  return (
    <div className="carousel">
      <ul className="list-images">
        {imageUrls.map((url, idx) => (
          // Utiliser translateX pour le repositionnement horizontal de l'image
          //   La position (absolue) de chaque image sera différente en fonction de son index et de la valeur de la variable "position" :
          //   - L'index repositionne l'image vers la droite (position initiale)
          // - La variable "position" repositionne l'image vers la gauche (positionnement dynamique)
          <li
            key={idx}
            style={{ transform: `translateX(${idx * 100 - position * 100}%)` }}
          >
            <img src={url} alt={url} />
          </li>
        ))}
      </ul>
      <button className="wrapper-icon icon-left" onClick={handleLeftClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="wrapper-icon icon-right" onClick={handleRightClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Carousel;
