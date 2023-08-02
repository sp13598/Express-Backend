const db = require('../models')

//create main model
const Customer = db.customers

// main work

    const addCustomer = async (req, res) => {
    try {
      const { name, email, mobile, city } = req.body;
  
      // Check if a customer with the same email already exists
      const existingCustomer = await Customer.findOne({ where: { email } });
      if (existingCustomer) {
        return res.status(400).json({ error: 'Customer with this email already exists' });
      }
  
      const customer = await Customer.create({
        name,
        email,
        mobile,
        city,
      });
  
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create customer' });
    }
  };

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
  try {
    let id = req.params.id;
    const deletedRowCount = await Customer.destroy({ where: { id: id } });
    if (deletedRowCount === 0) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.status(204).send(); // No Content
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete customer' });
  }
};

module.exports = {
    addCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}