import { Router } from "express";
import { middleAuth } from "../middleware/auth";
import { addCategory, changeCategory, deleteCategory, getAllCategories } from "../controllers/category";

const categoryRouter = Router()

categoryRouter.get('/',middleAuth ,getAllCategories)
categoryRouter.post('/',middleAuth, addCategory)
categoryRouter.patch('/:id',middleAuth,changeCategory)
categoryRouter.delete('/:id',middleAuth,deleteCategory)


export default categoryRouter