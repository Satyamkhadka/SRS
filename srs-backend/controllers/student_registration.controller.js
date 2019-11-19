const db = require('../static_files/db');
const status = require('../static_files/static_words');
//const mysql = require('mysql');

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

function changeStatus(req, res) {
    const id = req.body.id;
    const status = req.body.status;
    db.query("UPDATE `student` SET `status` = ? WHERE `student`.`id` = ?;", [status, id], (err, data) => {
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
                message: "successfull change of status to " + status
            });
        }
    });
}

function getAllStudentData(req, res) {
    db.query("SELECT * FROM student", (err, data) => {
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
                data: data
            });
        }
    })
}

function getStudentData(req, res) {
    const fullname = req.body.fullname;
    const email = req.body.email;
    db.query("SELECT * FROM student where fullname=? AND email=?", [fullname, email], (err, data) => {
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
                data: data
            });
        }
    })
}

function uploadDocFile(req, res) {

}
module.exports = {
    registerStudent,
    getAllStudentData,
    uploadDocFile,
    changeStatus,
    getStudentData
}