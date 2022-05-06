const express = require('express');
const router = express.Router();
const tags = require('../services/tags');

router.get('/', async (req, res, next) => {
    try {
        res.json(await tags.getTags(req.query.graph));
    } catch (err) {
        console.error("Error: " + err.message);
        next(err);
    }
});

module.exports = router;