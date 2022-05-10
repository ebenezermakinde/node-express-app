const app = require("express")();

// define home page
app.get("/", (req, res) => {
    res.send('Hello, Node app is ready to rock!')
});

// listen on port 4000
app.listen(4000, () => {
    console.log("Listening on port 4000")
});