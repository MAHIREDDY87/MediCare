import express from 'express';
import multer from 'multer';
import { createService, deleteService, getServiceByID, getServices, updateService } from '../controllers/serviceController.js';

const upload=multer({dest: "/tmp"});
const serviceRouter=express.Router();

serviceRouter.get("/",getServices);
serviceRouter.get("/:id",getServiceByID);

serviceRouter.post("/",upload.single("image"),createService);
serviceRouter.post("/:id", upload.single("image"),updateService);

serviceRouter.delete("/:id", deleteService);

export default serviceRouter;
