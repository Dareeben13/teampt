import { useState, useEffect } from "react";

export const useMousePosition = (ref) => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event) => {
    const { pageX, pageY, clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    ref.addEventListener("mousemove", updatePosition, false);
    ref.addEventListener("mouseenter", updatePosition, false);

    return () => {
      ref.removeEventListener("mousemove", updatePosition);
      ref.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};
