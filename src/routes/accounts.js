const express = require('express');
const { accounts } = require('../data');

const router = express.Router();


router.get('/savings', (req, res) => {
  res.render('account', { account: accounts.savings })
});

router.get('/checking', (req, res) => {
  res.render('account', { account: accounts.savings })
});

router.get('/credit', (req, res) => {
  res.render('account', { account: accounts.savings })
});

module.exports = router;
