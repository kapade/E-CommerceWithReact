const express = require('express')
require('module-alias/register')
const uploadProductPhoto = require('@middleware/photo.middleware')
const {
	getAllProducts,
	getProduct,
	updateProduct,
	deleteProduct,
	createProduct
} = require('@controllers/product.controller')

const {
	protect,
	restrictTo
} = require('@middleware/role.middleware')


const router = express.Router()

router.route('/').get(getAllProducts).post(uploadProductPhoto, createProduct)
router.route('/:id').get(getProduct).patch(uploadProductPhoto, updateProduct).delete(deleteProduct)


module.exports = router