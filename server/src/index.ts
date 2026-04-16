import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import 'dotenv/config'

const PORT = process.env.PORT || 5000

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json())


app.listen(PORT,() => {
    console.log(`App is working on Port ${PORT}`);
    
})

