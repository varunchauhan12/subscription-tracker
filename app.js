import express from "express";
import { PORT } from "./config/env.js";
import subscriptionRouter from "./routes/subscription.route.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import connectDB from "./database/mongodb.js";


const app = express();

app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);


app.get("/" , (req,res) => {
     res.send("Hello from subscription service "); 
});

app.listen(PORT, async () => {
    console.log(`Subscription service is listening on port ${PORT}` )
    await connectDB();
})

export default app;  