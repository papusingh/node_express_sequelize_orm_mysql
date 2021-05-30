const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/v1/register', (req, res) => {
    let result ;
    if (!req.body.user_id) {
        result = {
            status: false,
            message: "user id can not be null. "
        }
        res.status(400).send(result);
    }

    if (!req.body.password) {
        result = {
            status: false,
            message: "upassword can not be null. "
        }
        res.status(400).send(result);
    }

    let reqData = {
        user_id: req.body.user_id,
        password: req.body.password
    }

    User.create(reqData).then((data) => {
        result = {
            status: true,
            message: `registration Success with id ${data.user_id}`,
            data: {
                user_id: data.user_id
            }    
        }
        res.status(200).send(result);
    }).catch(error => {
        result = {
            status: false,
            message: `Error : ${error}`
        }
        res.status(500).send(result);
    })
});

router.post('/v1/login', (req, res) => {
    let result;
    if (!req.body.user_id) {
        result = {
            status: false,
            message: "user id can not be null. "
        }
        res.status(400).send(result);
    }

    if (!req.body.password) {
        result = {
            status: false,
            message: "upassword can not be null. "
        }
        res.status(400).send(result);
    }

    let reqData = {
        user_id: req.body.user_id,
        password: req.body.password
    }

    User.findOne({
        where: {
            user_id: req.body.user_id,
            password: req.body.password
        }
    }).then(value => {
        result = {
            status: true,
            message: "login success",
            data: {
                user_id: value.user_id
            }
        }
        res.status(200).send(result);
    }).catch(err => {
        result = {
            status: false,
            message: `Error : ${err}`
        }
        res.status(500).send(result);
    })

})



module.exports = router;