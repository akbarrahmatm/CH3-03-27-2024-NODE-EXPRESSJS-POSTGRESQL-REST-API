const { Customer } = require("../models");

const createCustomer = async (req, res, next) => {
  // Destructuring object
  const { name, age, email, city } = req.body;

  try {
    const newCustomer = await Customer.create({
      name,
      age,
      email,
      city,
    });

    res.status(200).json({
      status: "Success",
      data: newCustomer,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createCustomer,
};
