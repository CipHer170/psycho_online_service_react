import React from "react";
import { useState } from "react";

function Question({ image, title, page }) {
  const [show, setShow] = useState(false);

  return (
    <div className="question__items">
      <img src={image} alt="" />
      <h3 className="question__items__title">{title}</h3>
      <div className="question__items__page">
        {page.length > 89 ? page.slice(0, show ? 89 : 114) : page}
      </div>
      <button onClick={() => setShow(!show)}>
        {show ? "show more" : "show less"}
      </button>
    </div>
  );
}

export default Question;
