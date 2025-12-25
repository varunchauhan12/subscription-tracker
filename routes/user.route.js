import { Router } from "express";

const userRouter = Router();


userRouter.get("/", (req, res) => {
    res.send("Get all users");
});

userRouter.get("/:id", (req, res) => {
    res.send("Get user by ID");
});

userRouter.post("/", (req, res) => {
    res.send("Create a new user ");
});

userRouter.put("/:id", (req, res) => {
    res.send("Update a user");
});
userRouter.delete("/:id", (req, res) => {
    res.send("Delete a user");
});

export default userRouter;