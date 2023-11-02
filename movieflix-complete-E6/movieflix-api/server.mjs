import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import movies from './routes/movies-routes.mjs';

dotenv.config({ path: './config/.env' });

const app = express();

/************* Middleware ******************/
app.use(cors());
// http://localhost:3000//api/v1/movies
app.use('/api/v1/movies', movies);
/*******************************************/

// One pipe may not work on windows environments, try with two...
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
