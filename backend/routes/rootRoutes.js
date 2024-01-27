import express from "express";
import userRouter from "./userRoutes.js";
import accountRouter from "./accountRoutes.js";
const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/account", accountRouter);

export default rootRouter;
