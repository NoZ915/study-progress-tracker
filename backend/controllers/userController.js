import UserService from "../services/userService.js"

//處理google OAuth登入 回傳JWT(token)
export const googleAuth = async (req, res, next) => {
    try {
        const { isNewUser, token } = await UserService.createUserAndGenerateToken(req.user);
        
        // 重新導向前端，帶上 token & isNewUser
        res.redirect(`http://localhost:5173/auth?token=${token}&isNewUser=${isNewUser}`);
    } catch (err) {
        next(err);
    }
}