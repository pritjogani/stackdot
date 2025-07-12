    const express = require('express');
    const router = express.Router();
    const { userinformation, getuserinformation,  } = require('../controller/userinformation');
    

    router.route('/users').post(userinformation);
    router.route('/users').get(getuserinformation);
    

    module.exports = router;