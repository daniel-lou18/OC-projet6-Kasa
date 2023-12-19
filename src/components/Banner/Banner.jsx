import "./banner.scss";

function Banner({ children, type = "home" }) {
  return (
    <div className={`banner ${type === "home" ? "home" : "about"}`}>
      <h1>{children}</h1>
      <div className="overlay"></div>
    </div>
  );
}

export default Banner;
