import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import 'dotenv/config'
import authRouter from './routes/auth';
import expensesRouter from './routes/expenses'
import categoryRouter from './routes/category';
const PORT = process.env.PORT || 5000

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use('/auth',authRouter)
app.use('/expenses',expensesRouter)
app.use('/category',categoryRouter)

app.listen(PORT,() => {
    console.log(`App is working on Port ${PORT}`);
    
})

