const express = require('express');
const {formHandler, home, showData, updateRecord, deleteRecord } = require("../controller/formController")
const router = express.Router()

router.post("/submit", home);
router.get("/show", showData)
router.post("/update", updateRecord)
router.post("/delete", deleteRecord);
// router.get('/home', home)
module.exports = router