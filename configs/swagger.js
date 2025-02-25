import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Interfex Platform API",
            version:"1.0.0",
            description: "API form the management of the Interfex Platform",
            contact:{
                name: "Derian Hernández",
                email: "dhernandez-2023346@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/interfexPlatform/v1"
            }
        ]
    },
    apis:[
        "./src/auth/*.js",
        "./src/enterprise/*.js"
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export { swaggerDocs, swaggerUi }