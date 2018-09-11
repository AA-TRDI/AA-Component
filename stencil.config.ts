import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'aa-ui',
  globalStyle: 'src/globals/aa-ui.css',
  enableCache: true,
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
