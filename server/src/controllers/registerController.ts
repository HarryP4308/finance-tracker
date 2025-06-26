const express = require('express');
import { Request,Response } from "express";
const app = express()
import User from "../models/userModel";
const bcrypt = require('bcryptjs')

export const register = async (req: Request,res: Response)=>{
  const {email,password} = req.body;
  const hashedPassword = await bcrypt.hash(password,10)
  const newUser = new User({
    email: email,
    password: hashedPassword
  })
  await newUser.save();
  try{
    res.status(201).json({mssg:'User registered'})
  }
  catch(err){
    console.log(err)
  } 
  
}