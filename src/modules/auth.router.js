


const authRouter = require("express").Router()


// authRouter.get("/register",(req, res)=>{
//     // dynamic webpage send to browser/client
//     // pug, hbs, blade
//     res.render('view path') 
// })

authRouter.post('/register',(req,res)=>{
    //todo: control def
})

//activate
authRouter.get('/activate/:token',(req,res)=>{

});

authRouter.post('/login', (req,res)=>{
    //post gareko kinakipassword read garna namilos vanera
})

authRouter.post('/forget-password', (req,res)=>{
    //forget
})
// authRouter.post('/reset-password', (req,res)=>{
//     //reset
// })
authRouter.patch('/reset-password/:token',(req,res)=>{

})

module.exports = authRouter;

