const mongoose= require("mongoose");
const UserModel= require('../models/user.model');
const CartModel= require('../models/cart.model');
async function AddToCartController(req,res){
    const {productId, quantity}= req.body;
    const userId= req.UserId;
    try{
if(!mongoose.Types.ObjectId.isValid(productId)){
return res.status(400).send({message: 'Send Valid Product ID',success:false});

}
if(!mongoose.Types.ObjectId.isValid(userId)){
    return res.status(400).send({message: 'Send Valid User ID',success:false});
    
    }

    const checkUserpresent= await UserModel.findOne({_id:userId})
    if(!checkUserpresent){
        return res.status(401).send({message: ' Un-Authorised Please signup',success:false})
    }

    const checkIfProductPresent= await CartModel.findOne({productId:productId});
    if (checkIfProductPresent){
        return res.status(400).send({message: 'Product Already Present in cart', success:false});
    }

    await CartModel.create({
        productId, quantity, userId,
    });
    return res.status(201).send({ message:'Product is successfully created', success:true});

}
catch(er){
    return res.status(500).send({ message: er.message, success:false});
}
}

async function GetProductsForUser(req,res){
    const userId= req.UserId;
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.statuc(401).send({message: 'Un-Authorized Please signup'});
        }
        const checkuserPresent= await UserModel.findOne({_id:userId});
        if(!checkuserPresent){
            return res.status(401).send({message:'Un Authorized Please signup'});
        }
        const data= await CartModel.find({userId}).populate('productId');
        return res.status(200).send({
            message:'Datails succesfully fetched',
            success:true,
            cartData:data,
        });

    }
    catch(er){
        return res.status(500).send({ message: er.message, success:false});
}
}
module.exports= { AddToCartController, GetProductsForUser}