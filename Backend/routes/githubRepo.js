const { Router } = require("express");
const fetchRepos = require('./controllers/githubController');

const routerRepo = Router();

routerRepo.get('/popular-repos', async (req, res) => {
  try {
    const popularRepos = await fetchRepos();

    
    res.json(popularRepos);
  } catch (error) {
    console.error('Error al manejar la solicitud:', error.message);

    res.status(500).json({ error: 'Error al obtener los repositorios' });
  }
});

module.exports = routerRepo;