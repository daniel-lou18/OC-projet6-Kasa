import PaginationDot from "./PaginationDot";

function Pagination({ imageUrls, position, onClick }) {
  return (
    <>
      {imageUrls.length > 1 && (
        <div className="pagination">{`${position + 1}/${
          imageUrls.length
        }`}</div>
      )}
      {imageUrls.length > 1 && (
        <div className="pagination-mobile">
          {imageUrls.map((_, idx) => (
            <PaginationDot
              position={position}
              idx={idx}
              onClick={onClick}
              key={idx}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Pagination;
