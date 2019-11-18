const db = require('../static_files/db');
const status = require('../static_files/static_words');
//const mysql = require('mysql');

function createLeaveRequest(req, res) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;
    let leaveData = [
        req.body.leaveStartDate,
        req.body.leaveEndDate,
        date,
        req.body.typeOfLeave,
        req.body.employeeId
    ];
    let query = "INSERT into employeeLeave (leaveStartDate,leaveEndDate,dateRequested,typeOfLeave,employeeId) values (?,?,?,?,?)";

    db.query(query, leaveData, (err, data) => {

        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log("successful request");
            res.sendStatus(200);
        }
    });
}

function readLeaveRequests(req, res) {

    let query = 'SELECT * FROM employeeLeave order by leaveId desc';

    db.query(query, (err, data) => {

        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    });
}

function DeleteRequest(req, res) {

    let query = 'DELETE FROM employeeLeave where leaveId=' + req.params.id;

    db.query(query, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
}

function changeLeaveStatus(req, res) {

    let query = 'UPDATE employeeLeave set status= "' + req.body.status + '" WHERE leaveID=' + req.body.leaveId;

    db.query(query, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
}

function populate(req, res) {

    let month = req.params.month;
    let year = req.params.year;


    query = 'SELECT d.fullname ,l.typeOfLeave, l.dateRequested ,l.leaveStartDate,l.leaveEndDate ,l.status FROM employeeDetails d inner join employeeLeave l on d.employeeId=l.employeeId where dateRequested like "' + year + '-' + month + '%' + '"';

    db.query(query, (err, data) => {

        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(data);
            res.json(data);
        }
    });
}

function registerStudent(req, res) {
    req.body['status'] = status.data.not_verified;
    var studentData = [];
    var cols = [];
    var prep = [];
    for (let item in req.body) {
        cols.push(item);
        studentData.push(req.body[item]);
        prep.push('?');

    }
    const query = "INSERT INTO student (" + cols + ") values (" + prep + " );"
    console.log(query);
    db.query(query, studentData, (err, data) => {

        if (err) {
            console.log(err);
            res.json({
                success: false,
                message: err.message,
                code: err.code
            });
        } else {
            res.json({
                success: true,
                message: "successfull insertion of " + cols
            });
        }
    });


}
verifyStudent
module.exports = {
    registerStudent,
    //getCertificate,
    verifyStudent
}