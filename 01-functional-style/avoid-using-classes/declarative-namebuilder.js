export function capitalize(name) {
  return name
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export function createGreeting(name) {
  return `Hello, ${name}`;
}
