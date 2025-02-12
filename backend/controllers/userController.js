import UserService from "../services/userService.js"

//處理google OAuth登入 回傳JWT(token)
export const googleAuth = async (req, res, next) => {
    const { code } = req.body;
    try {
        const { token, isNewUser, user } = await UserService.exchangeGoogleToken(code);
        // 重新導向前端，帶上 token & isNewUser
        // res.redirect(`${process.env.FRONTEND_BASE_URL}/auth?token=${token}&isNewUser=${isNewUser}`);
        res.status(200).json({ token, isNewUser, user });
    } catch (err) {
        res.status(500).json({ error: "Failed to authenticate with Google" });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if (!user) {
            return res.status(400).json({ message: '無效的使用者 ID' });
        }

        const updatedUser = await UserService.updateUser(user, req.body);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}