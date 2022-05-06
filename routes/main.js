const express = require('express');
const router = express.Router();
const main = require('../services/main');


router.get('/:code', async (req, res, next) => {
    try {
        let code = req.params.code.toUpperCase();
        if (code.length == 6 && code.match(/^[a-zA-Z0-9]{6}/)) {
            res.render("pages/view", await main.viewGraphs(code));
        } else {
            throw({message : "Invalid code"});
        }
        
    } catch (err) {
        console.error("Error: " + err.message);
        next(err);
    }
});

router.get('/edit/:code', async (req, res, next) => {
    try {
        let code = req.params.code.toUpperCase();
        if (code.length == 6 && code.match(/^[a-zA-Z0-9]{6}/)) {
            res.render("pages/edit", await main.editGraphs(code));
        } else {
            throw({message : "Invalid code"});
        }
        
    } catch (err) {
        console.error("Error: " + err.message);
        next(err);
    }
});

router.post('/edit', async (req, res, next) => {
    try {
        res.json(await main.submitPoints(req.body));
    } catch (err) {
        console.error("Error: " + err.message);
        next(err);
    }
});

module.exports = router;