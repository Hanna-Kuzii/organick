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

console.log('Hello from app.js!');

module.exports = { fetchSomeData };