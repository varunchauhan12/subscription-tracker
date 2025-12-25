import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , " Name is Required"],
        trim:  true,
        minLenghth : [3 , " Name must be at least 3 characters long"],
        maxLength : [50 , " Name must be at most 50 characters long"]


    }, 
    email :{
        type : String,
        required : [true , " Email is Required"],
        unique : true,
        trim:  true,
        lowercase : true,
        match : [/.+\@.+\..+/ , " Please fill a valid email address"]
    },
    password : {
        type : String,
        required : [true , " Password is Required"],
        minLenghth : [6 , " Password must be at least 6 characters long"],
        maxLength : [128 , " Password must be at most 128 characters long"]

    

    }
} , { timestamps : true});

const User = mongoose.model("User" , userSchema);

export default User;
