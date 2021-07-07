import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import user from './server/routes/User.js';
import volunteerRoutes from './server/routes/Volunteer.js';
import ngoRoutes from './server/routes/Ngo.js';
import facilityRoutes from './server/routes/Facility.js';


const app = express();
const PORT = process.env.PORT || 5000;
const URI = `mongodb+srv://coviConnect:${process.env.DB_PASSWORD}@cluster0.54myv.mongodb.net/coviconnect?retryWrites=true&w=majority`;
const corsOptions = {
  origin: process.env.FRONTEND,
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/volunteer', volunteerRoutes)
app.use('/ngo', ngoRoutes)
app.use('/facility', facilityRoutes)

mongoose
    .connect(URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => console.log(error));

app.get('/', async (req, res) => {
  try {
    res.status(200).json({
      method: 'SERVER',
      status: res.statusCode,
      message: 'Server Active',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      method: 'SERVER',
      status: res.statusCode,
      message: 'Server Inactive',
    })
  }
})

app.listen(PORT, () => {
    if (process.env.NODE_ENV == 'production') {
        console.log(`Server Running : https://coviconnect-api.herokuapp.com \nClient Running : ${process.env.FRONTEND}`);
    } else {
        console.log(`Server Running : http://localhost:${PORT}`);
    }
});


