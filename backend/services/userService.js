import UserRepository from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwt.js";

class UserService {
    async createUserAndGenerateToken(userData) {
        let user = await UserRepository.getUserByEmail(userData.email);
        let isNewUser = false;

        if (!user) {
            isNewUser = true;
            const newUser = {
                name: userData.displayName,
                email: userData.email
            }
            user = await UserRepository.createUser(newUser);
        }
        // 產生JWT
        const token = generateToken(user);
        return { isNewUser, token };
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