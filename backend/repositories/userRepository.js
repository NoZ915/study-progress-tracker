import User from '../models/Users.js'

class UserRepository{
    async findOrCreateUser(userData){
        const validUserData = {
            name: userData.displayName,
            email: userData.email
        }
        console.log("validUserData", validUserData)
        const [user] = await User.findOrCreate({
            where: {email: userData.email},
            defaults: validUserData
        });
        console.log("repo user", user)
        return user;
    }
}

export default new UserRepository;