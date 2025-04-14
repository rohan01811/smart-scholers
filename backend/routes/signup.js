const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Signup = require('../models/signup.js');
const nodemailer = require('nodemailer');

// Replace this with your credentials (or use environment variables in a real project)


router.post('/',async(req,res)=>{
   

       const {name,email,password} = req.body;
       const existingUser = await Signup.findOne({ email });
       if (existingUser) return res.status(400).json({ message: 'Email already in use' });
       try{
         const newUser=new Signup({name,email,password});
            await newUser.save();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'rohandeshmukh1118@gmail.com',
                  pass: 'qhysvqmalvvzmqxf'
                }
              });
              
              // Inside your signup route, after saving the user
              const mailOptions = {
                from: 'rohandeshmukh1118@gmail.com',
                to:req.body.email,
                subject: 'Welcome to Smart-Scholars!',
                text: `Hi ${name},\n\nYou've successfully signed up on Smart-Scholars! 🎉\n\nWe're excited to have you on board. This platform helps students manage their work effectively. Log in and start exploring now!\n\nCheers,\nTeam Smart-Scholars`
              };
              
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error('❌ Email not sent:', error);
                } else {
                  console.log('✅ Email sent:', info.response);
                }
              });


            console.log('User created successfully:', newUser);

            const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Respond with token and user data
    res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
          
         
       }
       catch (error) {
        console.error('❌ Error adding todo:', error);
        res.status(500).json({ message: 'Error adding todo', error });
      }
})


module.exports=router;