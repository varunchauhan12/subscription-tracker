import User from "../models/users.model.js";

export const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        })

    }catch(error){
        next(error);
    }
}

export const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });


    }catch (error) {
        next(error);
    }
}