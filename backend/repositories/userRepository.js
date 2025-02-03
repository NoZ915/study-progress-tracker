import User from '../models/Users.js'

class UserRepository {
    async getUserByEmail(email) {
        return await User.findOne({
            where: { email }
        });
    }

    async getUserById(id) {
        return await User.findOne({
            where: { id }
        })
    }

    async createUser(user) {
        return await User.create(user);
    }

    async updateUser(user, userData) {
        return await user.update(userData);
    }
}

export default new UserRepository;