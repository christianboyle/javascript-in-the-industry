({
  plugins: ['jsdom-quokka-plugin'],
  jsdom: { file: 'index.html' },
});

function getElementPosition(elementID) {
  const element = document.getElementById(elementID);

  if (!element) {
    return [NaN, NaN];
  }

  element.style.position = 'absolute';
  element.style.left = 200 + 'px';
  element.style.top = 200 + 'px';

  const rect = element.getBoundingClientRect();

  return [rect.x, rect.y];
}

const [x, y] = getElementPosition('my-element');

console.log(x, y);
