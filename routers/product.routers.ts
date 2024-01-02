import { Router } from "express";
import { getProduct } from "../controllers/Products";


const productRouter = Router();

    productRouter.get("/search/:q", getProduct)

export default productRouter;