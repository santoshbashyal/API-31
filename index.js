const http = require("http");
const app = require("./src/config/express.config")

// express application
// const server = http.createServer((request, response)=>{
//     console.log(request.url)
//     console.log(request.method)
//     console.log(request.body)


//     console.log(request.headers)
//     response.end("hello hello world")
// })

const server = http.createServer(app)

server.listen(9005,"127.0.0.1",(err)=>{
    if(!err){
        console.log("server is running...")
        console.log("press ctrl+c to discontinue ..")
    }
})