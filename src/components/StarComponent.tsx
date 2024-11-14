import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarComponent = () => {
  const [colorStar, setColorStar] = useState(false);

  return (
    <div className="single_star">
      <FaStar
        size={50}
        onMouseEnter={() => setColorStar(true)}
        onMouseLeave={() => setColorStar(false)}
        style={{color: colorStar ? 'yellow' : 'grey'}}
      />
    </div>
  );
};

export default StarComponent;
