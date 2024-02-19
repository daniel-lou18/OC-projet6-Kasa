import { useState } from "react";
import "./carousel.scss";
import Pagination from "./Pagination";
import Buttons from "./Buttons";

function Carousel({ imageUrls }) {
  const [position, setPosition] = useState(0);
  console.log(position);

  const handleRightClick = () => {
    // retour à la première image après la dernière
    if (position === imageUrls.length - 1) return setPosition(0);
    setPosition((position) => position + 1);
  };

  const handleLeftClick = () => {
    // retour à la dernière image quand on appuie sur la flèche gauche
    if (position === 0) return setPosition(imageUrls.length - 1);
    setPosition((position) => position - 1);
  };

  const handleMobileClick = (position) => {
    setPosition(position);
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
            style={{ transform: `translateX(${(idx - position) * 100}%)` }}
          >
            <img src={url} alt={url} />
          </li>
        ))}
      </ul>
      <Buttons
        imageUrls={imageUrls}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
      <Pagination
        imageUrls={imageUrls}
        onClick={handleMobileClick}
        position={position}
      />
    </div>
  );
}

export default Carousel;
