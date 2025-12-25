import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up" , (req , res) => res.send("Sign Up Route"));
authRouter.post("/sign-in" , (req , res) => res.send("Sign In Route"));
authRouter.post("/sign-out" , (req , res) => res.send("Sign Out Route"));

export default authRouter;