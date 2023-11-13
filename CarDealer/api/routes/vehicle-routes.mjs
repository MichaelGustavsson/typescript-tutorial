import express from 'express';
import { listVehicles, getVehicle, addVehicle } from '../controllers/vehicle-controller.mjs';

const router = express.Router();

router.route('/').get(listVehicles).post(addVehicle);
router.route('/:id').get(getVehicle);

export default router;
