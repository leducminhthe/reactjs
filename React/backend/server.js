import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

dotenv.config();
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    function (err) {
        if (!err) {
            console.log('success connect');
        } else {
            console.log('false');
        }
    });

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ mess: 'Product not found' })
    }

})

app.use(bodyParser.json());
app.use('/api/users', userRoute);


app.listen(5000)