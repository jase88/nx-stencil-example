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
    angularOutputTarget({
      componentCorePackage: '@my-workspace/web-components',
      directivesProxyFile:
        '......libsweb-components-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
