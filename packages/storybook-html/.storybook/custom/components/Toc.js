import React from 'react';
import { H2 } from '@storybook/components/dist/typography/DocumentFormatting';
import './Toc.scss';

const Toc = () => {
  return (
    <nav className="uqds-toc">
      <H2 className="uqds-toc__heading">Contents</H2>
      <div className="js-toc toc uqds-toc__toc"></div>
    </nav>
  );
}

export default Toc;
