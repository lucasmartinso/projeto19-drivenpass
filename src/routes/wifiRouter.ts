import { Router } from "express";
import { createWifi, deleteWifi, findWifi, getAllUserWifi } from "../controllers/wifiController";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import schemaValidation from "../middlewares/validationSchemas";
import { wifiSchema } from "../schemas/wifiSchema";

const wifi = Router();

wifi.post("/wifi", schemaValidation(wifiSchema),validateTokenAuth,createWifi); 
wifi.get("/wifi/:id", validateTokenAuth,findWifi);
wifi.get("/wifi",validateTokenAuth,getAllUserWifi);
wifi.delete("/wifi/:id",validateTokenAuth,deleteWifi);

export default wifi;