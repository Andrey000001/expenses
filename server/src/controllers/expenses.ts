import { prisma } from "../lib/prisma"
import { Request,Response } from "express"
export const getAllTransactions = async(req: Request, res: Response) => {
    try {
        const {id} = req.user!
        const transactions = await prisma.expense.findMany({where: {
            userId: id
        }})
        if(!transactions.length) {
            return res.json({message: 'No transactions yet'})
        }
        return res.status(200).json({data: transactions})

    } catch (error) {
        return res.status(500).json("No transactions yet")
    }
}

export const addTransaction = async(req: Request ,res: Response) => {
    try {
        const {id} = req.user!
        const {name , amount ,date , categoryId} = req.body
        const newTransaction = await prisma.expense.create({data: {
        name ,amount ,date ,categoryId ,userId: id  }
        })
        return res.status(201).json({newTransaction})

    } catch (error) {
        return res.status(500).json('The connection is unstable')
    }
}

export const updateTransaction = async(req: Request ,res: Response) => {
    try {
    const {id: idTransaction} = req.params
    const {name ,amount,date} = req.body
    const findTransaction = await prisma.expense.findUnique({where: {
        id: Number(idTransaction),
    }})
    if(findTransaction?.userId !== req.user?.id) {
        return res.status(403).json({message: 'it is not your account'})
    }
    const updatedTransaction = await prisma.expense.update({where: {
        id: Number(idTransaction)
    } ,data: {
        name,amount,date,
    }})
    return res.status(200).json({data: updatedTransaction})

    } catch (error) {
        return res.status(500).json({message: 'Connection is poor'  })
    }
}


export const deleteTransaction = async(req: Request ,res: Response) => {
    try {
        const {id: idTransaction} = req.params
        const beloningTransaction = await prisma.expense.findUnique({where: {
            id: Number(idTransaction)
        }}) 
        if(beloningTransaction?.userId !== req.user?.id) {
            return res.status(403).json({message: 'This transaction isn"t belong you'})
        }
         await prisma.expense.delete({where: {id: Number(idTransaction)}})
         return res.status(200).json({message: 'Deleted successfully'})
    } catch (error) {
        return res.status(500).json({message: `Something went wrong ,${error});}`
        })
    }
}