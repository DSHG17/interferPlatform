import { enterpriseNameExits } from "../helpers/db-validators.js";
import { handleErrors } from "./handle-error.js";
import { hasRoles } from "./role-validator.js";
import { validateFields } from "./validate-fields.js";
import { validateJWT } from "./validate-jwt.js";
import { body } from "express-validator";


export const registerEnterpriseValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name", "El nombre de la emperesa es requerido").notEmpty(),
    body("name").custom(enterpriseNameExits),
    body("ubication", "La ubicación de la empresa es necesaria").notEmpty(),
    body("about" ,"La descripción de la empresa es necesaria").notEmpty(),
    body("contact","El contacto de la empresa es necesaria").notEmpty(),
    body("yearOfCreation").isInt().withMessage("No es caracter valido, la fecha es un numero"),
    body("category","La categoria es requerida"),
    validateFields,
    handleErrors
]

export const sortEnterprisesAZValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    validateFields,
    handleErrors  
]
