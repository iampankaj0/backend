const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../modules/SignUpModels');

router.post('/signup', async (request, response) => {
    // res.send('send')
    const signedUpUser = new signUpTemplateCopy({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})



module.exports = router