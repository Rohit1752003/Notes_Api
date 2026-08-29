import express from "express";
import noteRoute from './routes/task.route.js'
import errorHandler from './middleware/errorHandler.js'
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Notes API is running");
});
app.use('/api/notes' , noteRoute)
app.use(errorHandler)
export default app;