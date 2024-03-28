const { Customer } = require("../models");

const customerPage = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.render("customers/index.ejs", {
      customers,
      message: req.flash("message", ""),
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCustomerPage = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.render("customers/create.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const createCustomer = async (req, res, next) => {
  try {
    await Customer.create(req.body);
    req.flash("message", "Ditambah");
    res.redirect("/customers");
  } catch (err) {
    console.log(err.message);
  }
};

const editCustomerPage = async (req, res, next) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    res.render("customers/edit.ejs", {
      customer,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const editCustomer = async (req, res, next) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    console.log(req.body);
    req.flash("message", "Diedit");
    res.redirect("/customers");
  } catch (err) {
    console.log(err.message);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    req.flash("message", "Dihapus");
    res.redirect("/customers");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  editCustomerPage,
  editCustomer,
  deleteCustomer,
};
