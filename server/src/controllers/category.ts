import { Request,Response } from "express"
import { prisma } from "../lib/prisma"


export const getAllCategories = async(req: Request,res:Response) => {
    
    const transactions = await prisma.category.findMany({where: {
        id: Number(req.user?.id)
    }})

}

export const addCategory = (req: Request,res:Response) => {
    
}

export const changeCategory = (req: Request,res:Response) => {
    
} 

export const deleteCategory = (req: Request,res:Response) => {
    
} 

