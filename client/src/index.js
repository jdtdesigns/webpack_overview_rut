require('./css/style.scss');

// const axios = require('axios');
// const dayjs = require('dayjs');

const initHeader = require('./lib/header');

initHeader();


if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered');
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}














// axios.get('https://api.quotable.io/random')
//   .then(res => {
//     console.log(res.data);
//   });

// fetch('https://api.quotable.io/random')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });