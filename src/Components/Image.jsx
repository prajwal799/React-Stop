import React, { useState, useRef } from "react";

const Image = () => {
  const [query, setQuery] = useState();
  const [image, setImage] = useState(false);

  const imageRef = useRef(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    setImage(true);
  };

  return (
    <form>
      Url Of Image :
      <input onChange={handleChange} ref={imageRef} value={query} />
      <br />
      <br />
      <div>
        {image && <img src={query} alt="image" width="200px" height="200px" />}
      </div>
    </form>
  );
};

export default Image;
