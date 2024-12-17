const mongoose= require ('mongoose');

const userSchema= new mongoose.Schema({
Name: {type:String, require: [true, 'Please enter the Name...']},
email: {type: String, reuire :[true, 'Please enter the email...'],
     unique :[true, 'Please enter a unique email...']},
     password: {type:String, require: [true, 'Please enter the password...']},
     address: [{city: String},
        { country:String},
         {address1: String},
          {address2: String},
           {zipCode: String},
            {adressType: String},
        ],
     role:{type: String, default: 'user'},
     avatar:{
        url:{type:String, },
      public_id:{type:String,},
    },
     resetPasswordToken: String,
     resetPasswordTime: Date,

},
{ versionKey: false}
);

const UserModel= mongoose.model ('User', userSchema);

module.exports= UserModel;