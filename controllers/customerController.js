const db = require('../models')

//create main model
const Customer = db.customers

// main work

// 1. Save Customer
const addCustomer = async (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address
    }

    const customer = await Customer.create(info)
    res.status(201).json(customer);
}

// 2. Get All Customers
const getAllCustomers = async (req, res) => {
    let customers = await Customer.findAll({})
    res.status(200).json(customers)
  }

// 3. Get Customers by ID
const getCustomer = async (req, res) => {
    let id = req.params.id
    const customer = await Customer.findOne({ where: { id: id}});
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
}

// 4. Update Customer
const updateCustomer = async (req, res) => {
    let id = req.params.id
    const customer = await Customer.update(req.body, { where: { id: id}})
    if (customer) {
        res.status(200).json(customer);
    } else {
        res.status(404).json({ message: 'Customer not found' });
    }
}

// 5. Delete Customer
const deleteCustomer = async (req, res) => {
    let id = req.params.id
    await Customer.destroy({ where: { id: id}})
    res.status(200).send('Customer deleted sucessfully')
}

module.exports = {
    addCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}