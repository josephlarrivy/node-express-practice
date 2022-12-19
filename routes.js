const express = require("express");
const router = new express.Router();
const middleware = require("./middleware");
app.use(middleware.logger);



router.get("/", function (req, res) {
    return res.json({"test": "test"});
});





module.exports = router;