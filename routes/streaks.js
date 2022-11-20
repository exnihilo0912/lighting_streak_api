const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const { ids = [] } = req.query;

  console.log(ids, Array.isArray(ids));

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


module.exports = router;
