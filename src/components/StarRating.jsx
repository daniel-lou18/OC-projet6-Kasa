function StarRating({ rating }) {
  return (
    <div className="list-stars">
      <i className={`fa-solid fa-star ${rating > 0 ? "filled" : ""}`}></i>
      <i className={`fa-solid fa-star ${rating > 1 ? "filled" : ""}`}></i>
      <i className={`fa-solid fa-star ${rating > 2 ? "filled" : ""}`}></i>
      <i className={`fa-solid fa-star ${rating > 3 ? "filled" : ""}`}></i>
      <i className={`fa-solid fa-star ${rating > 4 ? "filled" : ""}`}></i>
    </div>
  );
}

export default StarRating;
