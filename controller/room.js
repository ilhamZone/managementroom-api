const models = require('../models');
const Room = models.room;

exports.ShowRoom = (req, res) => {
  Room.findAll().then(result => res.send(result));
};

exports.StoreRoom = (req, res) => {
  Room.create(req.body).then(result => {
    res.send({
      Message: 'Add Room Successfully',
      result
    });
  });
};

exports.UpdateRoom = (req, res) => {
  Room.update(req.body, { where: { id: req.params.id } }).then(res.send(req.body));
};

