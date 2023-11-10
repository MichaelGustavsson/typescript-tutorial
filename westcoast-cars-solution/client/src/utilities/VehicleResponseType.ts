import { IVehicle } from '../components/vehicle/IVehicle';
import { IVehicleDetail } from '../components/vehicle/IVehicleDetail';

export type VehicleResponseType = {
  status: string;
  statusCode: number;
  items?: number;
  data: IVehicle[] | IVehicleDetail;
};
