import User from '../models/Users.js'

class UserRepository{
    async getUserByEmail(email){
        return await User.findOne({
            where: { email }
        });
    }

    async getUserById(id){
        return await User.findOne({
            where: { id }
        })
    }

    async createUser(user){
        return await User.create(user);
    }
}

export default new UserRepository;