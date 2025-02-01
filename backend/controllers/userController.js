import userService from "../services/userService.js"

//處理google OAuth登入 回傳JWT(token)
export const googleAuth = async(req, res, next) => {
    try{
        console.log("hoo")
        const { user, token } = userService.createUserAndGenerateToken(req.user);
        console.log("userooooooooooooooooooooooooo",user)
        res.status(200).json({ user, token });
    }catch(err){
        next(err);
    }
}