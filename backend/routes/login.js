const express=require('express');
const router=express.Router();
const signupSchema=require('../models/signup.js');

router.post('/',async(req,res)=>{

    const{email,password}=req.body;
     try{
        const user=await signupSchema.findOne({email});
        if(!user){
            return res.status(400).json({message:'User not found'});
        }

        if(user.password!==password){
            return res.status(401).json({message:'Incorrect password'});
        }

        res.status(200).json({message:'Login successful',user:{id:user._id,email:user.email}});

     }
     catch(error){
        console.error('❌ Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
     }
});

module.exports=router;