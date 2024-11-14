import { CSSProperties, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarComponent = () => {
  const [colorStar, setColorStar] = useState<boolean>(false);

  return (
    <div className="single_star">
      <FaStar
        size={50}
        onMouseEnter={() => setColorStar(true)}
        onMouseLeave={() => setColorStar(false)}
        style={{ color: colorStar ? "yellow" : "grey" } as CSSProperties}
      />
    </div>
  );
};

export default StarComponent;
