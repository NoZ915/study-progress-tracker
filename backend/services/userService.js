import userRepository from "../repositories/userRepository.js";
import {generateToken} from "../utils/jwt.js";

class UserService{
    async createUserAndGenerateToken(userData){
        let user = await userRepository.findUserByEmail(userData.email);
        let isNewUser = false;

        if(!user){
            isNewUser = true;
            const newUser = {
                name: userData.displayName,
                email: userData.email
            }
            user = await userRepository.createUser(newUser);
        }
        // 產生JWT
        const token = generateToken(user);
        return { isNewUser, token };
    }
}

export default new UserService;