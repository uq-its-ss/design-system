import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import "./MermaidDisplay.scss";

const MermaidDisplay = ({ graph, svgId }) => {
  const outputElem = useRef(null);

  useEffect(() => {
    mermaid.render(svgId, graph, (svg) => {
      outputElem.current.innerHTML = svg;
    });
  });

  return <span className="uqds-mermaid" ref={outputElem}></span>;
};

export default MermaidDisplay;
