import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'UQHeaderClassic',
  buildEs5: false,
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle'
    }
  ]
};
