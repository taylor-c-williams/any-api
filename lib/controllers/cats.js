const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .post('/', async (req, res) => {
    const cat = await Cat.insert({
      breed: req.body.breed,
      origin: req.body.origin
    });
    res.json(cat);
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const cat = await Cat.getById(id);
    res.json(cat);
  })

  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    res.json(cats);
  })

  .patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { breed, origin } = req.body;

    try {
      const cat = await Cat.updateById(id, { breed, origin });

      res.json(cat);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    const cat = await Cat.deleteById(id);
    res.json(cat);
  });
