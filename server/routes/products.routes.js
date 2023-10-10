import {Router} from 'express'
import { deleteProduct, getProduct,patchProduct,postProduct } from '../controllers/products.controller.js' 

const router = Router()

router.get('/',getProduct)

router.post('/', postProduct)

router.delete('/',deleteProduct)

router.patch('/', patchProduct)

export default router