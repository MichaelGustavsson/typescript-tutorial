import { IVehicle } from './IVehicle';

export interface IVehicleDetail extends IVehicle {
  registrationNumber: string;
  modelYear: string;
  mileage: number;
  value: number;
  description: string;
}
