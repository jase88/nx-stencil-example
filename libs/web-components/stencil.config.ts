import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/web-components/dist',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      dir: '../../dist/libs/web-components/www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@my-workspace/web-components',
      directivesProxyFile:
        '../../../libs/web-components-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
