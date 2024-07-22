import express from 'express';
import dotenv from 'dotenv';
import connection from './config.js';
import userRoutes from './routes/userRoutes.js';
import videoRoutes from './routes/videoRoutes.js'
import CommentRoutes from './routes/commentRoutes.js'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT;
const url = `mongodb+srv://touseef:Touseefxyz123@users.0sh3dit.mongodb.net/?retryWrites=true&w=majority&appName=Users`;
connection(url); // Assuming connection function is exported directly
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', videoRoutes);
app.use('/api/users', CommentRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "some thing went wrong";
    return res.status(status).json({
        success: false,
        status,
        message

    })


})




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
