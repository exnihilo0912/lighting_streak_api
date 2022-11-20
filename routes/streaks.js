const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const streakEventSchema = new mongoose.Schema({
  date: Date,
  createdAt: Date,
  updatedAt: Date,
});
const streakSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: String,
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  events: [streakEventSchema],
  createdAt: Date,
  updatedAt: Date,
});
// machines: [mongoose.Types.ObjectId],

const models = {
  Streak: mongoose.model('Streak', streakSchema),
};

// GET
router.get('/', async function(req, res, next) {
  const { ids = [] } = req.query;
  const streakIds = Array.isArray(ids) ? ids : JSON.parse(ids);
  console.log(ids, Array.isArray(streakIds));

  const streaks = await models.Streak.find();

  console.log({ streaks });

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
router.post('/', async function(req, res, next) {
  const streakData = {
    // name: String,
    // startDate: Date,
    // endDate: Date,
    // isActive: Boolean,
    // events: [streakEventSchema],
    // createdAt: Date,
    // updatedAt: Date,
    ...req.body,
    isActive: true,
    events: [],
    createdAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString(),
  };
  await models.Streak.create(streakData);

  res.json({ status: 200, data: streakData });
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
