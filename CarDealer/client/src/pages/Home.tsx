import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Form, { type FormBehaviour } from '../components/ui/Form';
import { ReactNode, useEffect, useRef, useState } from 'react';
import List from '../components/ui/List';
import Header from '../components/ui/Header';
import { IVehicle } from '../components/vehicle/IVehicle';
import { get, post } from '../utilities/httpClient';
import { IVehiclesResponseType } from '../utilities/IVehicleResponseType';
import Alert from '../components/ui/Alert';

const HomePage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [error, setError] = useState<string>();

  const vehicleForm = useRef<FormBehaviour>(null);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    try {
      const result = await get<IVehiclesResponseType>('http://localhost:8080/api/v1/');
      setVehicles(result.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const handleSave = async (data: unknown) => {
    const dataToSave = data as IVehicle;

    try {
      const result = await post<IVehicle, IVehiclesResponseType>(
        'http://localhost:8080/api/v1/',
        dataToSave
      );

      if (result.statusCode === 201) {
        getVehicles();
      } else {
        throw new Error('Det gick inte att spara bilen!');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    vehicleForm.current?.clear();
  };

  let content: ReactNode;

  if (vehicles) {
    content = (
      <Container>
        <Header text='Bilar i lager'></Header>
        <List
          items={vehicles}
          renderItem={(vehicle) => (
            <li key={vehicle.id}>
              {vehicle.manufacturer} {vehicle.model} {vehicle.modelYear} {vehicle.mileage} km{' '}
              {vehicle.value} kr
            </li>
          )}
        />
      </Container>
    );
  }

  if (error) {
    content = (
      <Container>
        <Alert mode='error'>{error}</Alert>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Form onSave={handleSave} ref={vehicleForm}>
          <Input type='text' inputId='registrationNumber' labelText='Registreringsnummer' />
          <Input type='text' inputId='manufacturer' labelText='Tillverkare' />
          <Input type='text' inputId='model' labelText='Modell' />
          <Input type='number' inputId='modelYear' labelText='ÅrsModell' />
          <Input type='number' inputId='mileage' labelText='Antal körda km' />
          <Input type='number' inputId='value' labelText='Pris' />
          <Button>Spara</Button>
        </Form>
      </Container>

      {content}
    </>
  );
};

export default HomePage;
