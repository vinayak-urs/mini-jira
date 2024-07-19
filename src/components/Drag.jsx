import React, { useState } from "react";
import "./Drag.css";

const Drag = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "dropArea" : "hideDrop"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
        return;
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drag Here
    </section>
  );
};

export default Drag;
