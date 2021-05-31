const express = require('express');
const router = express.Router();
const User = require('../models/user');

// api for registration
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
            message: "password can not be null. "
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

//api for login
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
            message: "password can not be null. "
        }
        res.status(400).send(result);
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

//api for getting all users
router.get('/v1/allUsers', (req, res) => {
    let result;
    User.findAll().then((value) => {
        result = {
            status: true,
            message: "Success",
            data: value
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


//api for updating password
router.post('/v1/updatePassword', (req, res) => {
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
            message: "password can not be null. "
        }
        res.status(400).send(result);
    }
    let newPassword = req.body.password;
    User.update({password: newPassword}, {
        where: {
            user_id: req.body.user_id
        }
    }).then((value => {
        result = {
            status: true,
            message: "password updated successfully",
            data: {
                user_id: req.body.user_id
            }
        }
        if(value[0] === 1) {
            res.status(200).send(result);
        } else {
            res.status(500).send({
                status: false,
                message:`can not update password with user_id = ${req.body.user_id}`
            });
        }
        
    })).catch(err => {
        result = {
            status: false,
            message: `Error : ${err}`
        }
        res.status(500).send(result);
    })
})




module.exports = router;