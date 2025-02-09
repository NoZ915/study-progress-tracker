import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email, user_id: user.user_id},
        JWT_SECRET,
        {expiresIn: "7d"}
    )
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}