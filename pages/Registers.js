const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const employeSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    UserPhoneNumber: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    pass: {
        type:String,
        required:true
    },
    userPay: {
        type:Boolean,
        required:true
    },
    coursesNames: {
        type:Array,
        required:true
    },
    tokens: [
        {
            token: {
                type:String,
                required:true
            },
            userSearchingId: {
                type:String,
                unique:true,
                required:true
            }
        }
    ]
})

// token
employeSchema.methods.generateAuthToken = async function(){

    try {
    
        const token = jwt.sign({_id:this._id}, `${process.env.TOKEN_2ND_PART}`);
        // console.log(token);
        // push token and users search id 
        this.tokens = this.tokens.concat({token:token, userSearchingId:this._id});
        
        // console.log("registerJs page token:", token);
        return token;
    
    } catch (error) {
        console.log(error)
    }
};

// now we need to create a collections
const Register = new mongoose.model("Register", employeSchema);

module.exports = Register;