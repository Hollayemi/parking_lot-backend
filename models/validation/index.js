const Joi = require("@hapi/joi");

const userValidation = data => {
    const schema = Joi.object({
        username: Joi.string().min(5).required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })

    return schema.validate(data)
}

const validateParkingReg = data => {
    const schema = Joi.object({
        accountId: Joi.string().required(),
        lotName: Joi.string().min(5).required(),
        address: Joi.object().required(),
        coords: Joi.object().required(),
        no_of_zones: Joi.number().allow(""),
    })

    return schema.validate(data)
}


const validateFieldLogin = data => {
    const schema = Joi.object({
        email: Joi.string().min(5).required(),
        password: Joi.string().min(5).required(),
    })

    return schema.validate(data)
}


// validate_Sensor_Node
const validateSensorNode = data => {
    const schema = Joi.object({
        accountId: Joi.string().required(),
        parkingLot: Joi.string().required(),
        serialNumber: Joi.string().required().ip(),
        max_num: Joi.string().allow(''),
        sensorZone: Joi.string().allow(''),
        desc: Joi.string().allow(''),
    })

    return schema.validate(data)
}


module.exports = {
    userValidation,
    validateSensorNode,
    validateParkingReg,
    validateFieldLogin
}