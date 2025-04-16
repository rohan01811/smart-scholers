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
                text: `Hi ${name},

Welcome aboard! 🎓
We're thrilled to have you as a part of the Smart-Scholer family – where smart learning meets success.

You’ve just taken the first step toward transforming your academic journey. With Smart-Scholer, you'll get access to personalized study resources, real-time progress tracking, expert-curated content, and tools designed to help you study smarter, not harder.

Here’s what you can expect:

📚 Tailored learning materials

📈 Progress reports and smart insights

🧠 Engaging quizzes and challenges

🌟 A supportive community of learners

Your dashboard is ready – jump in and start exploring your new learning hub!

If you have any questions or need help getting started, we’re always here for you.
Let’s make this an amazing journey together. 🚀

Warm regards,
Team Smart-Scholer
Learn Smart. Achieve More.`
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