import express from "express";
import user from './routers/users.js'

const app  = express();

app.use(express.json());
app.use(express.static('./public'))

// configuring routers
app.use('/users',user);

app.get('/',(req,res)=>{
    res.send('hello working');
});

app.get('/buddy',(req,res)=>{
    res.json({
        message: "hey buddy"
    })
})

export default app;