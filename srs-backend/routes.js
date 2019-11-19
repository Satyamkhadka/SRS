const express = require('express');

const app = express();

///const middleware = require('./Controllers/middleware');
const register = require('./controllers/student_registration.controller');


//route for testing
app.get('/', (req, res) => {
    res.sendStatus(202);
});

app.post('/register', register.registerStudent);
app.post('/change-status', register.changeStatus);
app.get('/getAllStudent', register.getAllStudentData);
app.post('/getStudent', register.getStudentData);

//app.get('/userForAdminDashboard',middleware.checkToken, userController.getAllUsersForAdminDashboard);

//app.get('/getDataForPopup',middleware.checkToken, userController.getDataForPopup);

module.exports = app;