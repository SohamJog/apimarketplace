import React, { useState, useEffect } from 'react';

function FlickeringImage({ imageUrl }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  return (
    <img
      src={isVisible ? imageUrl : ''}
    />
  );
}

export default FlickeringImage;
