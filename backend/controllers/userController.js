import userService from "../services/userService"

//處理google OAuth登入 回傳JWT(token)
export const googleAuth = async(req, res, next) => {
    try{
        const { user, token } = userService.createUserAndGenerateToken(req.user);
        res.status(200).json({ user, token });
    }catch(err){
        next(err);
    }
}