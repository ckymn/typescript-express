import express, { Request, Response } from 'express';
import helmet from 'helmet';
import routes from './routes';
const app = express();
const PORT = process.env.PORT || 3000;

//security
app.use(helmet());

//middleware
app.use(express.json())

//router
routes(app);

//listen
app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`)
})