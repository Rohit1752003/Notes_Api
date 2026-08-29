import dotenv from 'dotenv'
import connectDB from './config/database.config.js'
import app from './app.js'
// import cookieParser from "cookie-parser";
dotenv.config({
    path : './.env',
})
const PORT = process.env.PORT || 3000;


const startServer = async () => {
  try {
  
    await connectDB();

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();

