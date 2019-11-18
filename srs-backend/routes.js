const express = require('express');

const app = express();

const middleware = require('./Controllers/middleware');

    

//route for testing
app.get('/', (req, res) => {
    res.sendStatus(202);
});


app.get('/userForAdminDashboard',middleware.checkToken, userController.getAllUsersForAdminDashboard);

app.get('/getDataForPopup',middleware.checkToken, userController.getDataForPopup);

