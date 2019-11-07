const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
const { authenticated } = require('./middleware');


// Controller
const UserController = require('./controller/users');
const RoomController = require('./controller/room');
const CustomerController = require('./controller/customer');
const OrderController = require('./controller/order');


app.use(bodyParser.json());

app.group('/api/v2', (router) => {
  // Users
  router.get('/users', authenticated, UserController.index);
  router.post('/login', UserController.login);
  router.post('/register', UserController.register);

  // Rooms
 router.get('/room', authenticated, RoomController.ShowRoom);
 router.post('/room', authenticated, RoomController.StoreRoom);
 router.patch('/room/:id', authenticated, RoomController.UpdateRoom);

 // Customer
 router.get('/customers', authenticated, CustomerController.ShowCostumer);
 router.post('/customers', authenticated, CustomerController.StoreCustomer);
 router.patch('/customers/:id', authenticated, CustomerController.UpdateCustomer);

 // Order 
 router.get('/checkin', authenticated, OrderController.ShowCheckin);
 router.post('/checkin', authenticated, OrderController.StoreCheckin);
 router.delete('/checkout/:id', authenticated, OrderController.CheckOut);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
