import UserRepository from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwt.js";

class UserService {
    async exchangeGoogleToken(code) {
        // 用req.body中的code跟google換到access token
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_SECRET_KEY,
                code,
                grant_type: "authorization_code",
                redirect_uri: process.env.FRONTEND_BASE_URL + "/auth/google/callback",
            }),
        });
        const tokenData = await tokenResponse.json();
        if (!tokenData.access_token) throw new Error("Failed to get access token");

        // 拿access token跟google要使用者資料
        const userResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
        });
        const userData = await userResponse.json();
        if (!userData.id) throw new Error("Failed to get user info");

        // 檢查是否為new user
        const { user, isNewUser } = await UserRepository.findOrCreateUser(userData);

        // 產生 JWT Token
        const token = generateToken(user);
        return { isNewUser, token, user };
    }

    async getUserById(id) {
        return await UserRepository.getUserById(id);
    }

    async createUser(userData) {
        return await UserRepository.createUser(userData);
    }

    async updateUser(user, userData) {
        return await UserRepository.updateUser(user, userData);
    }
}

export default new UserService;