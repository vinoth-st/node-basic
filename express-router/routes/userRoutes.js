const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Route: Home');
  });
  
router.get('/profile', (req, res) => {
res.send('User Route: Profile');
});

  
module.exports = router;
