import { Request,Response } from "express"
import { prisma } from "../lib/prisma"


export const getAllCategories = async(req: Request,res:Response) => {
    try {
        const categories = await prisma.category.findMany({where: {
        userId: Number(req.user?.id)
    }})
        return res.status(200).json({data: categories})
    } catch (err) {
        return res.status(500).json({message: `It happens in getAllTransactions - ${err}`})
    }

}

export const addCategory = async(req: Request,res:Response) => {
    try {
        const newCategory = await prisma.category.create({
             data: {
                name: req.body.name,
                userId: Number(req.user?.id)
            }
        })
        return res.status(201).json({data: newCategory})
    } catch (err) {
       return res.status(500).json({message: `It's in addCategory ,${err}`}) 
    }
}

export const changeCategory = async(req: Request,res:Response) => {
   try {
     const {id: idCategory} = req.params
     const {name} = req.body
     const accoutHolderId = req.user?.id
     const findedCategory = await prisma.category.findUnique({where: {
        id: Number(idCategory)
    }})  
    if(findedCategory?.userId !== accoutHolderId) {
        return res.status(403).json({message: `It's not your accout`})
    }
    const updatetCategory = await prisma.category.update({where: {id: Number(idCategory)},data: {name}})
    return res.status(200).json({data: updatetCategory }) 
   } catch (err) {
        return res.status(500).json({message: `It's in changeCategory ,${err}`});
   }
} 

export const deleteCategory = async(req: Request, res:Response) => {
   try {
     const { id: idCategory } = req.params;
    const category = await prisma.category.findUnique({
        where: {id: Number(idCategory)} 
    })
    if(category?.userId !== req.user?.id) {
        return res.status(403).json({message: `It's not your account`})
    }
    const deletedCategory = await prisma.category.delete({
        where: {id: Number(idCategory)}
    })
    return res.status(200).json({data: deletedCategory})

   } catch (err) {
        return res.status(500).json({message : `Internet connection is week`})
   }
} 

