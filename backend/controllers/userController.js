import UserService from "../services/userService.js"

//處理google OAuth登入 回傳JWT(token)
export const googleAuth = async (req, res, next) => {
    try {
        const { isNewUser, token } = await UserService.createUserAndGenerateToken(req.user);

        // 重新導向前端，帶上 token & isNewUser
        res.redirect(`${process.env.FRONTEND_BASE_URL}/auth?token=${token}&isNewUser=${isNewUser}`);
    } catch (err) {
        next(err);
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