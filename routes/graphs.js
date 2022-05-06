const express = require('express');
const router = express.Router();
const graphs = require('../services/graphs');

router.get('/', async (req, res, next) => {
    try {
        res.json(await graphs.getGraphs(req.query.name));
    } catch (err) {
        console.error("Error: " + err.message);
        next(err);
    }
});

module.exports = router;