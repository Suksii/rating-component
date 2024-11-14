import { CSSProperties, useEffect, useState } from "react";
import StarComponent from "./StarComponent";

const Ratings = () => {
  const [ratings, setRatings] = useState<number>(0);
  const [colorStarIndex, setColorStarIndex] = useState<number | null>(null);

  const handleRatings = (index: number) => {
    setRatings(index + 1);
  };

  useEffect(() => {
    console.log(ratings);
  }, [ratings]);
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(10)].map((_, index) => {
        const isStarFilled =
          colorStarIndex !== null ? colorStarIndex >= index : ratings > index;

        return (
          <div
            key={index}
            onClick={() => handleRatings(index)}
            onMouseEnter={() => setColorStarIndex(index)}
            onMouseLeave={() => setColorStarIndex(null)}
            style={
              {
                color: isStarFilled ? "yellow" : "grey",
              } as CSSProperties
            }
          >
            <StarComponent />
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
