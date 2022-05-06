const express = require('express');
const router = express.Router();
const create = require('../services/create');

router.get("/", (req, res) => {
  res.render("pages/create");
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await create.createNewGraph(req.body));
    } catch (err) {
      console.error(`Error while creating point`, err.message);
      next(err);
    }
  });

module.exports = router;