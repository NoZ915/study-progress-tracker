import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
    return jwt.sign(
        {id: user.user_id, email: user.email, group: user.group},
        JWT_SECRET,
        {expiresIn: "7d"}
    )
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}