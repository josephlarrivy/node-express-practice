const axios = require('axios');

// const middleware = require("./middleware");

app.use(express.json());


// app.use(middleware.logger);

app.use("/", routes)



app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});








module.exports = app;