import StarComponent from "./StarComponent";

const Ratings = () => {
  return (
    <div className="stars_container">
      {[...Array(10)].map((_, index) => (
        <StarComponent key={index} />
      ))}
    </div>
  );
};

export default Ratings;
