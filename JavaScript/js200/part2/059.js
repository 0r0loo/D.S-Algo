// 059 a모둘을 다양한 방식으로 사용하기

// version.js
export const version = 'v1.0';

// app.js
import {version as moduleVersion} from './version.js';

const version = 'v0';

console.log(moduleVersion);