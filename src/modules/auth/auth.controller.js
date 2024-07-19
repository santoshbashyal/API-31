class AuthController {
    register =(req,res,next)=>{
        const data = req.body //parser

        let errors = {};

        if(!data || !data.email) {
            errors = {
                ...errors,
                email: "email is required"
            }
        }
        if(!data || !data.password) {
            errors = {
                ...errors,
                password: "password is required"
            }
        }

        if(Object.keys(errors).length){
            next({
                detail : errors,
                message : "validation error",
                status : "REGISTRATION _ FAILED",
                code: 400

            })
        }
        
        //     res.status(400).json({
        //         result: {
        //             email: "Email is required"
        //         },
        //         message: "Validation Failed",
        //         meta: null, 
        //         status: "REGISTRATION_FAILED"
        //     })
        
        // // TODO: Control def
        //     // user => token => random string 100 
        //         // email sent link 
        // const output = {}
        
        // res.json({
        //     result: output,
        //     message: "Your account has been created successfully. Please check email for further processing.",
        //     meta: null,
        //     status: "REGISTER_SUCCESS"
        // })

    }
}
const authCtrl = new AuthController()
module.exports = authCtrl;