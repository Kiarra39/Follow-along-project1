
const ErrorHandler= require ('../utils/ErrorHandler');
    const UserModel= require('../models/user.model');
export async function CreateUser(req,res){
const {Name, email, password}= req.body;
const CheckUserPresent= await UserModel.findOne({
    email:email,

});
if(CheckUserPresent){
    return res.send('User Already exists');
}
new UserModel({
    Name: Name,
    email:email,
    password:password,
});

await UserModel.save();
return res.send('User Created Successfully');
}