import "dotenv/config";
import { sequelize } from "./database.js";
import express from "express";
import sessionsRoutes from "./routes/sessions.js";

const app = express();

// middleware
app.use((req, res, next) => {
  next();
})

// routes
app.use(express.json());
app.use("/api/sessions", sessionsRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync(); // 同步資料庫
    app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();