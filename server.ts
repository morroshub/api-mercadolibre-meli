//imports

import express, {Express, Request, Response} from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors"
import router from "./routers/index.router";


dotenv.config(); //variable de entorno

const PORT = parseInt(process.env.PORT as string, 10) || 4000;

// express
const server: Express = express()

//server
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(helmet())



//import router
server.use("/api/v1/", router);


server.get("/", (req: Request, res: Response) => {
    res.send(`[server]: Server is running at http://localhost:${PORT}`);
})


//puertos abiertos
server.listen(PORT, ()=> {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})