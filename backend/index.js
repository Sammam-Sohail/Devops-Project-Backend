const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// CI pipeline 

const verifiedUsers = {
    "101" : "Sammam Sohail",
    "102" : "Mohib Rehman",
    "103" : "Midhat",
    "104" : "Mohib Tariq",
}


app.get("/start", async (req, res) => {
	let { message } = req.body


    res.send("All Connections Established!!")
})

app.post("/login/:id", async (req, res) => {
	const id = req.params.id
    
    if (id in verifiedUsers){
        const person = verifiedUsers[id]
        res.status(200).send(`Welcome ${person}`)
    }
    else{
        res.status(404).send("Invalid id")
    } 

})
