//module.exports = () => {
  // ...
//};
//console.log('Hola')
// ES6
import mdLinks from 'p-mdlinks';
// CommonJS
const mdLinks = require('p-mdlinks');
 
mdLinks('src')
  .then((res) => console.log('dir without validate: ', res))
  .catch(console.log);
mdLinks('./src', { validate: true })
  .then((res) => console.log('dir with validate: ', res))
  .catch(console.log);
mdLinks('README.md')
  .then((res) => console.log('file without validate: ', res))
  .catch(console.log);
mdLinks('./README.md', { validate: true })
  .then((res) => console.log('file with validate: ', res))
  .catch(console.log);
mdLinks('assets')
  .then((res) => console.log('dir not exist: ', res))
  .catch(console.log);
mdLinks('index.js')
  .then((res) => console.log('md not correct: ', res))
  .catch(console.log);
mdLinks('reading.md')
  .then((res) => console.log('md file not exist: ', res))
  .catch(console.log);