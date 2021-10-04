import fetch from 'node-fetch';

// Imperative

const names = ['jack', 'annie', 'peter'];

async function getInformationFromName(name) {
  const request = await fetch('https://randomuser.me/api/?name=' + name);
  const result = await request.json();
  return result;
}

// const namesWithInformation = [];

// for (const name of names) {
//   const information = await getInformationFromName(name);
//   namesWithInformation.push(information);
// }

// console.log(namesWithInformation);

const namesWithInformation = await Promise.all(
  names.map(getInformationFromName)
);

console.log(namesWithInformation);
