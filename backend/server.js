import "dotenv/config";
import "./utils/passport.js";
import "./models/index.js";
import cors from "cors";
import express from "express";
import passport from "passport";
import { sequelize } from "./database.js";
import sessionsRoutes from "./routes/sessions.js";
import materialsRoutes from "./routes/materials.js"
import usersRoutes from "./routes/users.js";
import userMaterialsRoutes from "./routes/userMaterials.js";
import progressRoutes from "./routes/progress.js";

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
app.use("/api/users", usersRoutes)
app.use("/api/auth", usersRoutes);
app.use("/api/userMaterials", userMaterialsRoutes)
app.use("/api/progress", progressRoutes)

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