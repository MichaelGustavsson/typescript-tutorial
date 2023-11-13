import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/vehicle-routes.mjs';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
