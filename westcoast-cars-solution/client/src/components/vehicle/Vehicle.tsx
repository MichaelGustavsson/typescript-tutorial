import { FC } from 'react'; // Functional Component...
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

type VehicleProps = {
  image: string;
  vehicleId: number;
  manufacturer: string;
  model: string;
};
const Vehicle: FC<VehicleProps> = ({ image, vehicleId, manufacturer, model }) => {
  const url = '../src/assets/images/';
  return (
    <Card image={{ src: url + image, alt: vehicleId.toString() }}>
      <p>
        {manufacturer} - {model}
      </p>
      <Link to={`/vehicles/${vehicleId}`} className='btn'>
        Visa mer
      </Link>
    </Card>
  );
};

export default Vehicle;
