// const express = require('express')
// const router = express()
const router = require('express').Router()
const authRouter = require('../modules/auth.router')

router.use("/health",(req, res)=>{
    res.end("this  is healthcheckup url")
})

// // params parameterized routes 
// router.get('/course/:slug', (req,res)=>{
//     const params = req.params;
//     const query  = req.query;

//     res.json({
//         slug: params.slug,
//         query: query
//     })
// })

router.use('/auth',authRouter)




router.use("/",(request,response)=>{
    response.end("HEllo world")
})

module.exports = router;