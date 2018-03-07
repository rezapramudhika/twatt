const express = require('express');
const router = express.Router();
const { search, recentTimeline, createTweet } = require('../controllers/twitter.controller')

/* GET users listing. */
router.get('/', search);
router.get('/recent-timeline', recentTimeline);
router.post('/tweet', createTweet);
module.exports = router;
