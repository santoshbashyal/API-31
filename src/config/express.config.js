const express = require('express');
const router = require("./router.config");
// express vanne function import vayo

const app = express() //express function lai call gareko

//routing kasari garne
// app.get()
// app.post()
// app.put()
// app.patch()
// app.delete()

// yo sabai ma eutai kaam garne vaye we use use method

// app.use("/",(request,response)=>{
//     response.end("HEllo world")
// })

// json parser
app.use(express.json());


app.use("/api/v1",router) //mount router to app
app.use("/api/v2",router) // versioning control eg. force update garne bela

//404 request
app.use((req,res,next)=>{
    // res.status(404).json({
    //     result: null,
    //     message: "resource are not found",
    //     meta : null,
    //     status: "NOT_FOUND"
    // })
    next({code:404,
        message: "resource not found",
        status: "not found"
    })
})

//garbage middleware, chhuteko haru 
// error handlinng middleware
app.use((error,req,res,next)=>{
    console.log("........................... ERROR HANDLER")
    let result = error.detail || null ;
    let message = error.message || "servwer errorr ..."
    let status =error.status || "INTERNAL SERVER ERROR"
    let code = error.code || 500;
    res.status(code).json({
        result: "",
        message: "",
        meta: null,
        status: ""
    })

})

module.exports = app; 
// yo app vane variable ra express.config vanne file chha - YO app vanne variable ma hamro overall server ko code base ayera mount hunchha, directly or indirectly.