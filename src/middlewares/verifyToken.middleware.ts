
import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { AppError } from '../errors/errors'

export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization
    if (!token) {
        throw new AppError("Invalid token", 401)
    }
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if(error){
            throw new AppError( `${error}` ,401)  
        }

    req.user = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        phone: decoded.phone
    }
    
        return next()
    })
}