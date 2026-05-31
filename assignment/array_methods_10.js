const items = ['Home', 'About', 'Services', 'Contact'];

let html = '<ul>\n';

items.forEach(item => {
  html += `  <li>${item}</li>\n`;
});

html += '</ul>';

console.log(html);
