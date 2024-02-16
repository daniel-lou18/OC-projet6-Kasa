function PaginationDot({ position, idx, onClick }) {
  return (
    <i
      className={`fa-circle ${position === idx ? "fa-solid" : "fa-regular"}`}
      onClick={() => onClick(idx)}
    ></i>
  );
}

export default PaginationDot;
