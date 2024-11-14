import { CSSProperties, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  const [ratings, setRatings] = useState<number>(0);
  const [colorStarIndex, setColorStarIndex] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleRatings = (index: number) => {
    setRatings(index + 1);
  };

  useEffect(() => {
    if (ratings > 0) {
      setMessage(`Your rating is ${ratings}`);
    }
    const timeout = setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [ratings]);

  return (
    <div style={{ position: "relative" }}>
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
                  cursor: "pointer",
                  color: isStarFilled ? "yellow" : "grey",
                } as CSSProperties
              }
            >
              <FaStar size={50} />
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        {ratings > 0 && <h1>{message}</h1>}
      </div>
    </div>
  );
};

export default Ratings;
