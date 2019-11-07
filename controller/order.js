const models = require('../models');

const Room = models.room;
const Customer = models.customer;
const Order = models.order;

exports.ShowCheckin = async (req, res) => {
  const find = await Room.findAll({
    attributes: ['id', 'name'],
    order: [['name', 'ASC']],
    include: [{
      model: Order,
      as: 'Order',
      required: false,
      include: [{
        model: Customer,
        as: 'Customer',
      }],
    }],
  });
  res.send(find);
};

exports.StoreCheckin = (req, res) => {
  Order.create(req.body).then(result => {
    res.send({
      Message: 'Add Checkin Successfully',
      result
    });
  }).catch(err => {
    res.send({
      message: 'Cannot add data',
      err
    });
  });
};


exports.CheckOut = (req, res) => {
  Order.destroy({ where: { id: req.params.id } })
    .then(result => {
      res.send({
        message: 'Checkout Successfully',
        result
      }).catch(err => {
        res.send({
          message: 'Checkout data Not Found',
          err
        });
      });
    }).catch(err => {
      res.send({
        message: 'Checkout fail',
        err
      });
    });
};

