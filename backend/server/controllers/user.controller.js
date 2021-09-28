require('module-alias/register')

const User = require('@models/user.model')
const AppBaseError = require('@utils/appError.util')
const asyncCatch = require('@utils/asyncError.util')
const factory = require('@controllers/globalCrud.controller')


const filterObj = (obj, ...allowedFields) => {
	const newObj = {}
	Object.keys(obj).forEach(el => {
		if (allowedFields.includes(el)) {
			newObj[el] = obj[el]
		}
	})
	return newObj
}

const getAllUsers = asyncCatch(async (req, res, next) => {
	const users = await User.find()
	res.status(200).json({
		status: 'success',
		results: users.length,
		data: { users }
	})
})

const getUser = factory.getOne(User)

// const createUser = factory.createOne(User) // ? NOT NEEDED /// sign up exists

const updateUser = factory.updateOne(User)

const deleteUser = factory.deleteOne(User)

// = (req, res) =>
// 	res.status(500).json({
// 		status : 'error',
// 		message : 'This route is not yet defined . '
// 	})

const updateMe = asyncCatch(async (req, res, next) => {
	// console.log(req.file)
	// console.log(req.body)
	if (req.file) req.body.photo = req.file.filename
	const doc = await User.findByIdAndUpdate(req.user._id, req.body, {
		new: true,
		runValidators: true
	})

	console.log(req.body) // DEN PREPEI NA KANEI UPDATE TO PASSWORD !
	if (req.body.password) {
		return next(new AppBaseError('This is not allowed. Change password at /updatedMyPassword'))
	}
	if (!doc) {
		return next(new AppBaseError('No document found with that ID', 404))
	}

	res.status(200).json({
		status: 'success',
		data: {
			data: doc
		}
	})
})

const deleteMe = asyncCatch(async (req, res, next) => {
	await User.findByIdAndUpdate(req.user.id, { active: false })
	res.status(204).json({
		status: 'success',
		data: null
	})
})

const getMe = (req, res, next) => {
	req.params.id = req.user.id
	next()
}

module.exports = { getAllUsers, getUser, updateUser, deleteUser, getMe, updateMe, deleteMe }







