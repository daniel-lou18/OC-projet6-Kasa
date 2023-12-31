import "./starRating.scss";

function StarRating({ rating, numStars = 5 }) {
  return (
    <ul className="list-stars">
      {Array.from({ length: numStars }, (_, idx) => (
        <li key={idx}>
          <i className={`fa-solid fa-star ${rating > idx ? "filled" : ""}`} />
        </li>
      ))}
    </ul>
  );
}

// Créer un tableau à l'aide de la méthode Array.from :
// - premier argument : objet contenant uniquement la propriété length permet de créer un tableau
// - second argument : fonction de retour qui exécute une fonction .map sur chaque élément du tableau généré
// Nous avons uniquement besoin de l'index pour attribuer de façon dynamique la classe "filled" à chaque étoile

export default StarRating;
