import React, { forwardRef } from "react";
import { useMousePosition } from "./cursor";

export const Cursor = forwardRef((_, ref) => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        left: clientX,
        top: clientY,
        transition: "transform .2s ease-in-out",
      }}
    >
      <span className="view-pointer">View</span>
    </div>
  );
});
