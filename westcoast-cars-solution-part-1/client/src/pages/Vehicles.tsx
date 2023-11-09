import { type ReactNode, useEffect, useState } from 'react';
import Header from '../components/ui/Header';
import { IVehicle } from '../components/vehicle/IVehicle';
import { get } from '../utilities/httpClient';
import Progress from '../components/ui/Progress';
import ErrorMessage from '../components/ui/ErrorMessage';
import Vehicle from '../components/vehicle/Vehicle';

type VehicleResponseType = {
  status: string;
  statusCode: number;
  items: number;
  data: IVehicle[];
};

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getAllVehicles = async () => {
      try {
        setIsLoading(true);
        const result = await get<VehicleResponseType>('http://localhost:3000/api/');
        setVehicles(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      setIsLoading(false);
    };
    getAllVehicles();
  }, []);

  let content: ReactNode;

  if (vehicles) {
    content = (
      <section className='vehicle-gallery'>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id}>
            <Vehicle
              image={vehicle.imageUrl}
              vehicleId={vehicle.id}
              manufacturer={vehicle.manufacturer}
              model={vehicle.model}
            />
          </div>
        ))}
      </section>
    );
  }

  if (isLoading) {
    content = <Progress text='Hämtar bilar vänta lite...' />;
  }

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <article className='container'>
      <Header>
        <h2>Aktuella bilar!</h2>
      </Header>
      {content}
    </article>
  );
};

export default VehiclesPage;
