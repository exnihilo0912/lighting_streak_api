const express = require('express');
const router = express.Router();

// GET
router.get('/', function(req, res, next) {
  const { ids = [] } = req.query;
  const streakIds = Array.isArray(ids) ? ids : JSON.parse(ids);
  console.log(ids, Array.isArray(streakIds));

  res.json({
    status: 200,
    message: `GET ALL STREAKS, ids: ${ids}`
  });
});
router.get('/:id', function(req, res, next) {
  const { id } = req.params;

  res.json({
    status: 200,
    message: `GET STREAKS id: ${id}`
  });
});

// CREATE
router.post('/', function(req, res, next) {
  res.json(req.body);
});

// UPDATE
router.put('/:id', function(req, res, next) {
  const { id } = req.params;

  res.json({
    id: id,
    data: req.body,
  });
});

// DELETE
router.delete('/:id', function(req, res, next) {
  const { id } = req.params;

  res.json({ status: 'OK', message: `Streak #${id} was deleted`});
});

module.exports = router;
