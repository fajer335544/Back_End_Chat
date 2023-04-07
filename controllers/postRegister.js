const User=require('../models/user')
const bcrypt=require('bcryptjs') 
const postRegister=async(req, res) =>{
  try {
    const {username ,password,mail}=req.body;

  const userExists = await User.findOne({mail: mail});
  if(userExists){
    return res.status(409).send("this mail is already in use")
  }

  const encryptedPassword= await bcrypt.hash(password,12);
 

const user = await User.create({
  username:username,
  password:encryptedPassword,
  mail: mail

})
const token ="Jwt Token"

res.status(201).json({
    userDetails:{
mail:user.mail,
token:token,
username:user.username
}
})
  }
  catch(err){
   // return res.status(500).json({messagError:"error form server"})
   console.log(err)
  }



   }

   module.exports=postRegister;