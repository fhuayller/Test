const axios = require('axios');

const username = 'google';
const perPage = 100; // Puedes ajustar el número de resultados por página según tus necesidades
let page = 1;
let allRepos = [];

function fetchRepos() {
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=${perPage}&page=${page}`;

  axios.get(apiUrl)
    .then(response => {
      const repos = response.data;

      // Agregar los repositorios actuales a la lista general
      allRepos = allRepos.concat(repos);

      // Verificar si hay más páginas y realizar otra solicitud si es necesario
      if (repos.length === perPage) {
        page++;
        fetchRepos();
      } else {
        // Ordenar y mostrar los repositorios más populares
        allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        console.log('Los repositorios más populares de Google en GitHub:');
        allRepos.slice(0, 10).forEach(repo => {
          console.log(`${repo.name}: ${repo.html_url} - Estrellas: ${repo.stargazers_count}`);
        });
      }
    })
    .catch(error => {
      console.error('Error al obtener los repositorios:', error.message);
    });
}

// Iniciar la obtención de repositorios
fetchRepos();