import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Stories,
} from '@storybook/addon-docs';
import Toc from './Toc';

const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Toc />
    <Description />
    <Stories includePrimary title={"Examples"} />
  </>
)

export default DocsPage;
