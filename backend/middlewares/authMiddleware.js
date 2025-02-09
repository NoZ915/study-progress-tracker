import { verifyToken } from "../utils/jwt.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // 將解碼的 payload 添加到 req.user
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};