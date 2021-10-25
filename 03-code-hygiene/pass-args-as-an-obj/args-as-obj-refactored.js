import fetch from 'node-fetch';

function createUser({ username, date, isAdmin, isMod }) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      username,
      date,
      isAdmin,
      isMod,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

console.log(
  createUser({
    username: 'Christian',
    date: '2021-10-25',
    isAdmin: false,
    isMod: true,
  })
);
