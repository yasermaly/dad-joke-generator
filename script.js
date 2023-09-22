const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const apiKey = 'FWqcQt29AwxHLF20+Hy+KQ==Bfeqio6zeRQpNEsP';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  joke.innerText = 'Updating..';
  btn.disabled = true;
  btn.innerText = 'Loading..';
  const response = await fetch(apiURL, options);
  const data = await response.json();

  btn.disabled = false;
  btn.innerText = 'Tell me a joke';
  joke.innerText = data[0].joke;
}

btn.addEventListener('click', getJoke);
