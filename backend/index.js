const express = require("express");
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({origin: "*"}));

// CI pipeline 

const verifiedUsers = {
    "sammamsohail" : "sammam12345",
    "mohibrehman" : "mohib12345",
    "midhatkarim" : "midhat12345",
    "mohibtariq" : "mohib12345",
}


app.get("/start", async (req, res) => {
	let { message } = req.body

    res.send("All Connections Established!!")
})

app.post("/login/:id", async (req, res) => {
	const id = req.params.id
    const password = req.body.password
    
    id in verifiedUsers ? 
        password === verifiedUsers[id] ?  res.status(200).send(`Welcome ${id}`) : res.status(400).send("Invalid password") 
        : res.status(404).send("User not found")

})
