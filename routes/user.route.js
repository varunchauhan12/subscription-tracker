import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authMiddleware, getUser);

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
