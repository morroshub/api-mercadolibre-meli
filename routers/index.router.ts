import { Router } from "express"
import Routerproduct from "./product.routers"

const router = Router()

    router.use("/product", Routerproduct)

export default router