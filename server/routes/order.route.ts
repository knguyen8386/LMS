import express from "express";
import { createOrder, getAllOrders, newPayment, sendStripePublshableKey } from "../controllers/order.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.get("/get-orders", isAuthenticated,authorizeRoles("admin"), getAllOrders);

orderRouter.get("/payment/stripepublisahblekey", sendStripePublshableKey);

orderRouter.post("/payment", isAuthenticated, newPayment);

export default orderRouter;