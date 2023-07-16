import express from 'express'

const router = express.Router();

router.get('/name',(req,res)=>{
    res.json({
        name:"juyoeng"
    })
})

router.get('/sing',(req,res)=>{
    res.send('Singing the song of love .... 🎶')
})

export default router;