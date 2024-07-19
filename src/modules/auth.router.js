


const authRouter = require("express").Router()


// authRouter.get("/register",(req, res)=>{
//     // dynamic webpage send to browser/client
//     // pug, hbs, blade
//     res.render('view path') 
// })



// ENDPOINT
//  private, open


// authRouter.use((req,res,next) => {      //MIDDLEWARE concept line:30
//     console.log("I am always called")
//     // req =====> register
//     req.newrequest = "i am new"
//     next();
// })

// authRouter.use((req,res,next) => {
//     console.log("I am another middleware")
//     res.json()
//     next();
// })




// => parser                
    //json,urlencoded,multipart
// => fileupload 
        // 
 // => validation
    // 
    
// authRouter.use(express.json());
const validator = (req, res, next)=>{
    next()
}

// REGISTER
authRouter.post('/register',(req,res,next)=>{
    const data = req.body //parsers
    if(!data || !data.email){
        next({
            code:400,
            detail   : {email : "email is required"},
            message: "validation failed",
            status: "registration failed",
        })

    }


    // const data ={
    //     email :"",
    // }
    // if(!data.email){
    //     res.status(400).json({
    //         result:{
    //             email: "email is  required"

    //         },
    //         message: "validation ",
    //         meta: null,
    //         status: "REGISTRATION_FAILED"
            
    //     })
    // }



    
    //todo: control def
    // user => token => random string data
        // email sent link
    // res.end("hello")
    const output ={}
   
    // res.sendStatus(201)
    // res.json({
    //     result: output,
    //     message: "your account has been created successfully , Please check your email for further processing",
    //     meta: null,
    //     status: "REGISTER_SUCCESS"
    // })
    res.status.json({   //client lai pathauna status(201) thapeko
        result: data,
        message: "your account has been created successfully , Please check your email for further processing",
        meta: null,
        status: "REGISTER_SUCCESS"
    })
})



authRouter.get('/me',(req,res,next)=>{
    // get loggedInUser's profile
    
});



//activate
authRouter.post('/login', (req,res,next)=>{
    //post gareko kinakipassword read garna namilos vanera
})

authRouter.post('/forget-password', (req,res,next)=>{
    //forget
})
// authRouter.post('/reset-password', (req,res,next)=>{
//     //reset
// })
authRouter.patch('/reset-password/:token',(req,res,next)=>{

})

module.exports = authRouter;

