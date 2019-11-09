const models = require('../models');

const Customer = models.customer;

exports.ShowCostumer = (req, res) => {
  Customer.findAll({ order: [['name', 'ASC']] }).then(result => res.send(result));
};

exports.StoreCustomer = (req, res) => {
  Customer.create(req.body).then(result => {
    res.send({
      Message: 'Add Customer Successfully',
      result
    });
  });
};

exports.UpdateCustomer = (req, res) => {
  Customer.update(req.body, { where: { id: req.params.id } }).then(res.send(req.body));
};

exports.DeleteCustomer = (req, res) => {
  Customer.destroy({ where: { id: req.params.id } })
    .then(result => {
      res.send({
        message: 'Delete Successfully',
        result
      });
    }).catch(err => {
      res.send({
        message: 'Cannot Remove Customer',
        err
      });
    });
}
