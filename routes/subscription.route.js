import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req , res) => {
    res.send({ title: " get all subscriptions"});
    
});

subscriptionRouter.get("/:id", (req , res) => {
    res.send({ title: " get subscription by id"});
});

subscriptionRouter.post("/", (req , res) => {
    res.send({ title: " create a new subscription"});
});

subscriptionRouter.put("/:id", (req , res) => {
    res.send({ title: " update a subscription"});
});

subscriptionRouter.delete("/:id", (req , res) => {
    res.send({ title: " delete a subscription"});
});

subscriptionRouter.get("/user/:id" ,(req,res) => {
    res.send({title : " get subscriptions by user id"});

})

subscriptionRouter.put("/:id/cancel",(req,res) => {
    res.send({title : " cancel a subscription "});
})

subscriptionRouter.get("/upcomingrenewals",(req,res) => {
    res.send({title : " get subscriptions with upcoming renewals "});
});


export default subscriptionRouter;

