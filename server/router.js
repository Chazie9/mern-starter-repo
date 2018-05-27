const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').load();

router.get('/', (req, res, next)=>{
  //do stuff
});

// router.put('/api/getScore', (req, res)=>{
//   //do stuff
//   console.log(req, "the req body")

// });

module.exports = router;

