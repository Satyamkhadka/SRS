const express = require('express');

const app = express();

///const middleware = require('./Controllers/middleware');
const register = require('./controllers/student_registration.controller');


//route for testing
app.get('/', (req, res) => {
    res.sendStatus(202);
});

app.get('/register', register.registerStudent);
//app.get('/userForAdminDashboard',middleware.checkToken, userController.getAllUsersForAdminDashboard);

//app.get('/getDataForPopup',middleware.checkToken, userController.getDataForPopup);

module.exports = app;