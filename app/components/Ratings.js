import { useState } from "react";
import { Rating } from "primereact/rating";

function Ratings() {
  const [value, setValue] = useState(null);
  return (
    <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
  );
}

export default Ratings;
