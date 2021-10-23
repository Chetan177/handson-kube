var express = require('express');

var app = express();

app.use(express.json());
app.use(require('express-request-response-logger')());


let metrices = {
    "load": 0
}

app.get('/currentLoad', async  (req, res) => {
    res.status(200);
    res.json(metrices);
})  

app.post('/updateLoad', async (req, res) => {
    try {
        metrices["load"] = req.body.load
        res.status(200);
        res.json(metrices);
    }catch(e){
        res.status(500);
        res.json({error: e});
    }
});

app.listen(3000);
console.log("application is running on port 3000")