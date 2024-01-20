const axios = require('axios');

const fetchRepos = async () => {
  const username = 'google';
  const perPage = 100;
  let page = 1;
  let allRepos = [];

  const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=${perPage}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    const repos = response.data;

    allRepos = allRepos.concat(repos);

    if (repos.length === perPage) {
      page++;
      await fetchRepos();
    } else {
      //mas rateados
      allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      console.log('Los repositorios más populares de Google en GitHub:');
      allRepos.slice(0, 10).forEach(repo => {
        console.log(`${repo.name}: ${repo.html_url} - Estrellas: ${repo.stargazers_count}`);
      });
    }
  } catch (error) {
    console.error('Error al obtener los repositorios:', error.message);
    throw new Error('Error al obtener los repositorios');
  }

  return allRepos.slice(0, 10);
};

module.exports = fetchRepos;