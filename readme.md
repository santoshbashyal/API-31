# Server Side API Development 
# Framework 
    -  is called Express js

# API 
    - Application programming Interface
    - that connects your FrontEnd applications with BackEnd(BE) server
    - URL - EndPoints
        (API haruma lekhne k ho tw ? url haru lekhne, also called end points that should be declared on backend)


api ma garne operations lai 4 ota  category ma define garinchha called 
# CRUD Operations 
    -create => post method,
    -read => get method,
    -update => put/patch method and
    -delete => delete method



- software design garda s/w ko design pattern
# Design pattern 
    -MVC Pattern (hamile use garne )
        Model View Controller Pattern

        -MOdEL => DB structure / data - mongo db
        -View  => Presentation/ display - React
        -Controller => Logic/Business logic - Express

# MVC flow                           ---------------------------->
    USER --> Api Request --> Routing ----> middleware/potional---> Controller----->Service-->Model---> Real DB
                            url, method                            business logic   
    agent    login,postMethod                    validation       
                                                                    -------REspond to client --> JSON response    
                                                -----------------------Respond to client---> JSON response          

## Express Features
    - API are endpoints defined on Backend Server
         => listens for the request => responds to the client 
    -Routing 
        - login garera submit garesi, tyo data linchha(FE le pathako),tyo url herchha kun method , kun data kun method ma pathayo vanera read garchha 
        - kaha pathaune vanera action box lai routing vanchha
        
        - aafno applications ko requirement anusar le we buidup Restful services => 5 methods to handle reuest
         -get, post, put, patch, delete
    - triggers the action based on url and method (Controller)
          

## Two types of MVC pattern :
### General
    -src/
        -config/
            =>all the configuration files
        -routes/
            => Modular routes 
            eg. auth.routes.js, user.routes.js, ....
        -middlewares/
            =>
        -controllers/
            => eg auth.controller.js,..
        -services/
            =>eg. auth.services.js, ...
        -models/
            => ...

### Modular
    -src/
        -config/
            =>router.config.js
        -modules/
            -auth/
                -> auth.routes.js
                -> auth.middleware.js
                -> auth.controller.js
                -> auth.services.js
                -> auth.model.js
                -> index.js ====> expose point
            - user/
            - brand/
            - category/
        - services/
        - middlewares/
        
==== Nest js 




