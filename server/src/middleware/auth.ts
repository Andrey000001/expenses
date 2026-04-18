import { Response ,Request, NextFunction} from "express";
import jwt from 'jsonwebtoken'


export const middleAuth = (req: Request, res:Response,next: NextFunction) => {
    try {
        const userToken = req.headers.authorization?.split(' ')[1]
    if(!userToken) {
        return res.status(403).json('Access fobbiden')
    }
    const verifyToken = jwt.verify(userToken ,process.env.SECRET!)
    if(!verifyToken) {
        return res.status(403).json('Token is expired')
    }
    req.user = verifyToken as {id: number,name: string,email:string}

    next()
    } catch (err) {
        return res.status(403).json({message: `The token is wrong,${err}`})
    }
}
