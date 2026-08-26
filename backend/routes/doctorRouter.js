import express from 'express';
import multer from 'multer';
import { createDoctor, deleteDoctor, doctorLogin, getDoctorByID, getDoctors, toggleAvailability, updateDoctor } from '../controllers/doctorController.js';
import doctorAuth from '../middlewears/doctorAuth.js';

const upload = multer({dest: "/tmp"});

const doctorRouter = express.Router();

doctorRouter.get("/", getDoctors);
doctorRouter.post('/login', doctorLogin);

doctorRouter.get("/:id", getDoctorByID);
doctorRouter.post("/", upload.single("image"), createDoctor);

//after Login
doctorRouter.put("/:id",doctorAuth,upload.single("image"),updateDoctor);
doctorRouter.post("/:id/toggle-availability", doctorAuth,toggleAvailability);
doctorRouter.delete("/:id",deleteDoctor);

export default doctorRouter;
