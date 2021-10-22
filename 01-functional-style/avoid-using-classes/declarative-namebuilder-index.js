import { capitalize, createGreeting } from './declarative-namebuilder.js';

const capitalized = capitalize('christian boyle');
const greeting = createGreeting(capitalized);

console.log(greeting); // Hello, Christian Boyle
