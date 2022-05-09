const app = require("express")();

// define home page
app.get("/", (req, res) => {
    res.send('Hello, ready to recieve requests!')
});

// listen on port 4000
app.listen(4000, () => {
    console.log("Listening on port 4000")
});