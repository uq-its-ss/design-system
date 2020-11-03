import React from 'react';
import './Toc.scss';

const Toc = () => {
  return (
    <nav>
      <h2 className="visually-hidden">Table of contents</h2>
      <div className="js-toc toc uqds-toc"></div>
    </nav>
  );
}

export default Toc;
