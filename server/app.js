const API_URL = 'http://localhost:3000';

const fetchSomeData = async () => {
  try {
    const response = await fetch(`${API_URL}/some-data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fs = require('fs')

fs.open('1.txt', 'r', function (err, file) {
    console.log('IO')
})

setImmediate(function () {
    console.log('setImmediate')
})

setTimeout(function () {
    console.log('setTimeout')
}, 0)

process.nextTick(function () {
    console.log('nextTick')
})

module.exports = { fetchSomeData };