import { body } from "express-validator";
import { validateFields } from "./validate-fields.js"
import { handleErrors } from "./handle-error.js"

export const loginValidator = [
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("username").optional().isString().withMessage("Username es en formáto erróneo"),
    body("password").isLength({min: 4}).withMessage("El password debe contener al menos 8 caracteres"),
    validateFields,
    handleErrors
]
