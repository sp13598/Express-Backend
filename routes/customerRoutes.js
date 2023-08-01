const express = require('express')

const customerController = require('../controllers/customerController')

const router = express.Router()

// POST --> /customers/addCustomer
router.post('/addCustomer', customerController.addCustomer)

// GET --> /customers/getAllCustomers
router.get('/getAllCustomers', customerController.getAllCustomers)

// GET --> /customers/getCustomer
router.get('/:id', customerController.getCustomer)

// PUT --> /customers/ID
router.put('/:id', customerController.updateCustomer)

//DELETE --> /customers/ID
router.delete('/:id', customerController.deleteCustomer)


module.exports = router