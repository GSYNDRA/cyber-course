// package.json => yarn init => enter enter enter enter

// yarn add express

// import framework express vào 
import express from 'express';
const app = express();
// chèn middleware
// định dạng body từ text thành json
app.use(express.json())

// cho phép FE gọi API từ BE
// yarn add cors
import cors from 'cors';
app.use(cors());

// khởi tạo server BE node chạy port 8080
app.listen(8080);

// khởi động server BE node => node server.js

// yarn add nodemon

// GET => url: localhost:8080/demo
//  endpoint /demo

// tham số 1: tên endpoint
// tham số 2: arrow function
// id, userName, email, phone, sex
// endpoint: /demo/:id2/:email2
app.get("/demo", (req, res) => {

    // C1: lấy từ URL
    // - query string: /demo?id=123&email=demo@gmail.com
    // - query params: /demo/123/demo@gmail.com

    //destructering
    // let { id, email } = req.query;
    // let { id2, email2 } = req.params;

    // C2: lấy từ json
    let { id, userName, email, phone, sex } = req.body;

    // BE trả dữ liệu về cho FE
    res.status(200).send({ id, userName, email, phone, sex }); // tất cả định dạng  liệu trừ number
});

// yarn add mysql2

import mysql from 'mysql2';

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "db_youtube"
});

// endpoint: viết thường, cách nhau bởi dấu gạch ngang
app.get("/get-video", (req, res) => {
    try {
        //  bất đồng bộ => then catch, async await

        connect.query("SELECT * FROM video", (err, result) => {

            res.status(200).send(result);

        });

        if(true){
            res.status(400).send("Login thất bại");
            return;
        }

        res.status(200).send("abc");

        // ORM: sequelize, prisma
    } catch (exception) {
        res.status(500).send("Lỗi ...")
    }

})