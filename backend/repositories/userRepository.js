import User from '../models/Users.js'

class UserRepository{
    async findOrCreateUser(userData){
        const [user] = await User.findOrCreate({
            where: {email: userData.email},
            default: userData
        });
        return user;
    }
}

export default new UserRepository;