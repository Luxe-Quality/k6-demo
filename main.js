export { viewTheArticle } from './scenarios/view_the_article.js';

globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 1;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 5;

const testConfig = JSON.parse(open('./config/test.json'));

export const options = Object.assign({
  insecureSkipTlsVerify: false,
}, testConfig);

export default function () {
  console.log('No scenarios in test.json. Executing default function...');
}
