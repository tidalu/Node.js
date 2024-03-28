import add from './math.mjs';
import multiply from './oneExport.mjs';
import { log, divide } from './multiple.mjs';
import { must, rule } from './must.mjs';

console.log(add(1, 12));
console.log(multiply(12, 12));
log('helo kiddo');
log(divide(12, 12));

log(rule(must()));
