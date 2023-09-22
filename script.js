const btn = document.getElementById('btn');
const apiKey = 'FWqcQt29AwxHLF20+Hy+KQ==Bfeqio6zeRQpNEsP';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();

  console.log(data);
}

btn.addEventListener('click', getJoke);
