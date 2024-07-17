import React, { useState } from "react";
import "./Drag.css";

const Drag = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop?"dropArea":"hideDrop"}
      onDragEnter={()=>setShowDrop(true)}
      onDragLeave={()=>setShowDrop(false)}
    >
      Drag Here
    </section>
  );
};

export default Drag;
