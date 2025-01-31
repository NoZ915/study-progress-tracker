import userRepository from "../repositories/userRepository.js";
import generateToken from "../utils/jwt.js";

class UserService{
    async createUserAndGenerateToken(userData){
        const user = await userRepository.findOrCreateUser(userData);
        const token = generateToken(userData);

        return { user, token };
    }
}

export default new UserService;