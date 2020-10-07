import React from "react";

function Tag({ tag }) {
  return (
    <div class="tag">
      <div className="tag__div">
        <h1 class="tag__heading">{tag}</h1>
      </div>
    </div>
  );
}

export default Tag;
