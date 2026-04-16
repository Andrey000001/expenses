import { prisma } from "../lib/prisma"
import { Request,Response } from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const register = async( req: Request, res: Response) => {
    try {
        const {email, password ,name} = req.body
        const saltRounds = 11;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(user) {
            return res.status(400).json({message: `${email} elready exist`})
        } 
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password_hash: hashedPassword
            },select: {
                id: true,
                name: true,
                email: true,
            }
        });
        
        const token = jwt.sign(newUser, process.env.SECRET! ,{ expiresIn: '1h' })
        return res.status(201).json({newUser, token}) 

    } catch (error) {
        return res.status(500).json({message: 'Something went wrong'})
    }
}

export const login = async(req: Request, res: Response) => {
try {
        const {email, password} = req.body;
    const user = await prisma.user.findFirst({where: {
        email
    }
})
    if(!user) {
        return res.status(404).json({message: `Пользователя с таким ${email} or password Not found`})
    }
    const currentPassword = await bcrypt.compare(password, user.password_hash)

    if(!currentPassword) {
        return res.status(400).json({message: 'The password is not correct'})
    }
    const token = jwt.sign({userId :user.id ,email: user.email, name: user.name} , process.env.SECRET! ,{expiresIn: '1h'})
    
    return res.status(200).json({id :user.id ,email: user.email, name: user.name, token})

} catch (error) {
    return res.status(500).json('Try again later')
}

}