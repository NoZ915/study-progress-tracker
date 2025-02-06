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

    async findOrCreateUser(userData) {
        let user = await User.findOne({
            where: { email: userData.email }
        });
        let isNewUser = false;
        if (!user) {
            isNewUser = true;
            const newUser = {
                name: userData.name,
                email: userData.email
            }
            user = await this.createUser(newUser);
        }

        return { user, isNewUser };
    }
}

export default new UserRepository;