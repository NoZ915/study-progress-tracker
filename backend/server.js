import "dotenv/config";
import "./config/passport.js";
import cors from "cors";
import express from "express";
import passport from "passport";
import { sequelize } from "./database.js";
import sessionsRoutes from "./routes/sessions.js";
import materialsRoutes from "./routes/materials.js"
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(passport.initialize());

// middleware
app.use((req, res, next) => {
  next();
})

// routes
app.use(express.json());
app.use("/api/sessions", sessionsRoutes);
app.use("/api/materials", materialsRoutes);
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync(); // 同步資料庫
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();