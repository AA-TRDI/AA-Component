import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'aa-svg',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
