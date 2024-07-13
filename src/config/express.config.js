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
app.use("/api/v1",router) //mount router to app
app.use("/api/v2",router) // versioning control eg. force update garne bela



module.exports = app; 
// yo app vane variable ra express.config vanne file chha - YO app vanne variable ma hamro overall server ko code base ayera mount hunchha, directly or indirectly.