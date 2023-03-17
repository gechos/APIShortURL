const { body } = require('express-validator');

const SingUpCheck = () => { 
    return [
        body('email').trim().not().isEmpty().whitMessage 
        ('this field is required').isEmail().WhitMessage
        ('please enter a valid email address'),
        body('username').trim().not().isEmpty().whitMessage 
        ('this field is required').isEmail().WhitMessage
        ('please enter a valid email address'),
        body('name').trim().not().isEmpty().isString().whitMessage
        ('please enter only letters').isLength({min: 3, max: 10}),
        body('password').isString().isLength({min:6, max: 8})
    ]
}


module.export = {
    SingUpCheck
}
