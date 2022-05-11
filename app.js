const app = require("express")();

// define home page
app.get("/", (req, res) => {
    res.send('<h2>Hello, Node app is ready to rock!</h2>')
});

// listen on port 4000
app.listen(4000, () => {
    console.log("Listening on port 4000")
});