const ParkingFieldSchema = require("../models/parkingField");
const UserSchema = require("../models/createAccount");
const { validateParkingReg } = require("../models/validation");
const byCrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.createParkingField = async(req, res) => {
    try {
        const { error } = validateParkingReg(req.body)
        const exists = await ParkingFieldSchema.findOne({lotName: req.body.lotName, accountId: req.user.userId})    
        const parkingField = ParkingFieldSchema(req.body);
        console.log(req.user)
        if(!error){
            if(!exists){
                const saveInfo = await parkingField.save()
                console.log(saveInfo)
                await UserSchema.findOneAndUpdate({serialNumber: req.body.serialNumber},{
                    $set: {hasLot: req.user.userId}
                },
                {new:true}
            );
                return res.status(201).json({ data: saveInfo, message: 'New parking field created', status: "success"})
            }else{
                return res.status(500).json({message: 'Parking field with this name already exist ', status: "error"})
            }
        }else{
            return res.status(501).json({message:error.details[0].message, type:"error"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Server error", status: "error"})
    }
}



exports.fieldLogin = async (req, res) => {
    const {error} = validateLogin(req.body);
    const userInfo = await ParkingFieldSchema.findOne({email: req.body.email})    
    
    try {
        if(error){
            return res.status(501).json({message:error.details[0].message, status:"error"})
        }else{
            if(!userInfo){
                return res.status(501).send({message:"Invalid email or password!", status: "error"});
            }else{            
                const validPass = await byCrypt.compare(req.body.password, userInfo.password);    
                if(!validPass) {
                    return res.status(501).send({message:"Invalid email or password!", status: "error"});
                }else{
                    const accessToken = jwt.sign(
                        {
                            userId: userInfo._id,
                        },
                        process.env.JWT_USER_TOKEN,
                        {expiresIn:"60h"}
                    )
                    console.log(accessToken);
                    const {password, ...otherDetails} = userInfo._doc;
                    return res.status(201).send({ data:{...otherDetails, accessToken}, message:'logged in', status: "success"});
                }
            }
        }
                

    } catch (error) {
        return res.status(500).send({message:"server error", status:"error"})
    }
};
