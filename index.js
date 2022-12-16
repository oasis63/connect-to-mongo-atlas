const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser');
const userModal = require('./model/user')

const PORT = 5000;
const app = express();
app.use(bodyParser.json());


// connection to database

// const uri = "mongodb+srv://root:allowme@rr-cluster1.las45v7.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://root:allowme@rr-cluster1.las45v7.mongodb.net/rr_db?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options, err => {
    if (err) console.log(err)
    else console.log('connected successfully')
});

// api middleware controller 

app.listen(PORT, () => {
    console.log('listening at port : ', PORT);
});

app.get('/', (req, res) => {
    console.log('/ homepage called')

    res.status(200)
        .send({
            message: 'getting this data from homepage'
        });
});


app.get('/getUserData',(req,res)=>{
    console.log('/getUserData called')

    userModal.find((err,data)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    });
});

app.post('/insert', (req, res) => {
    console.log('/insert called')

    const user = req.body;
    let userData = new userModal(user);

    userData.save((err, data) => {
        if (err) {
            console.error(err);
            res.status(404).send({ message: 'some db error occurred' })
        } else {
            console.log('data : ', data)
            res.status(200).send({ message: 'data inserted successfully' })
        }
    });
});