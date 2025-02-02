import User from '../models/Users.js'

class UserRepository{
    async findUserByEmail(email){
        return await User.findOne({
            where: { email }
        });
    }

    async createUser(user){
        return await User.create(user);

    }
}

export default new UserRepository;