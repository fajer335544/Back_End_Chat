const mongoose =require('mongoose');

const userSchema =mongoose.Schema({
    username: {type :String, Unique: true},
    password: {type :String, },
    mail:{type:String, Unique: true}
})

module.exports=mongoose.model('User',userSchema);