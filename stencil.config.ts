import { Config } from '@stencil/core';
import { readFileSync } from 'fs';

export const config: Config = {
  outputTargets: [
    {
      type: 'www'
    }
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
    logRequests: true,
    basePath: '/'
  },
  globalScript: 'src/global/app.ts'
};


// import { readFileSync } from 'fs';
// import { Config } from '@stencil/core';

// export const config: Config = {
//   devServer: {
//     reloadStrategy: 'pageReload',
//     port: 4444,
//     https: {
//       cert: readFileSync('cert.pem', 'utf8'),
//       key: readFileSync('key.pem', 'utf8')
//     }
//   }
// };