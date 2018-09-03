import React from 'react';
import ReactDOM from 'react-dom';

// console.log('React module is up and running!');

const template = (
<h3>
Developer: Sergey Kanashin.
This info is from external React module.
CLICK ME!
</h3>
);

const appRoot = document.getElementById('app');

appRoot.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  document.body.innerHTML += `<h2>${new Date().toLocaleDateString('ru-RU')}</h2>`;
});

ReactDOM.render(template, appRoot);
