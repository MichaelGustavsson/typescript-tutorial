import { fetchData, addData } from '../utilities/http.mjs';

const listVehicles = async (req, res) => {
  const response = await fetchData();
  res.status(200).json(response);
};

const getVehicle = async (req, res) => {
  const id = req.params.id;
  const response = await fetchData(id);
  res.status(200).json(response);
};

const addVehicle = async (req, res) => {
  const body = req.body;
  const response = await addData(body);

  if (response.statusCode === 201) {
    return res.status(201).json(response);
  } else {
    return res.status(500).json(response);
  }
};

export { listVehicles, getVehicle, addVehicle };
