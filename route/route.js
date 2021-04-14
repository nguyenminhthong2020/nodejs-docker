const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const student = {
        "name" : "Nguyễn Minh Thông",
        "age": 23
    };

    res.status(200).json(student);
})

router.get('/name', (req, res) => {
    res.status(200).send("Nguyễn Minh Thông 9021");
})


module.exports = router;