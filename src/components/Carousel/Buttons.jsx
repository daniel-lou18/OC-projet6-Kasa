function Buttons({ imageUrls, onLeftClick, onRightClick }) {
  if (imageUrls.length <= 1) return null;
  return (
    // uniquement afficher les boutons s'il y a plusieurs photos
    <>
      <button className="wrapper-icon icon-left" onClick={onLeftClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="wrapper-icon icon-right" onClick={onRightClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </>
  );
}

export default Buttons;
