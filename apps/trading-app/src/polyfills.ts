import 'zone.js'
import * as process from 'process';

window['process'] = process;

(window as any).process = {
  env: { NODE_DEBUG: undefined,
  DEBUG: undefined },
};
