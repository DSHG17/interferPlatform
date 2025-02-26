import { enterpriseNameExits, enterpriseExists } from "../helpers/db-validators.js";
import { handleErrors } from "./handle-error.js";
import { hasRoles } from "./role-validator.js";
import { validateFields } from "./validate-fields.js";
import { validateJWT } from "./validate-jwt.js";
import { body,param } from "express-validator";


export const registerEnterpriseValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name", "El nombre de la emperesa es requerido").notEmpty(),
    body("name").custom(enterpriseNameExits),
    body("ubication", "La ubicación de la empresa es necesaria").notEmpty(),
    body("about" ,"La descripción de la empresa es necesaria").notEmpty(),
    body("contact","El contacto de la empresa es necesaria").notEmpty(),
    body("yearOfCreation").isInt().withMessage("No es caracter valido, la fecha es un numero"),
    body("category","La categoria es requerida").notEmpty(),
    validateFields,
    handleErrors
]

export const sortEnterprisesValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    validateFields,
    handleErrors  
]

export const updateEnterpriseValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("eid", "No es un ID válido").isMongoId(),
    param("eid").custom(enterpriseExists),
    body("name").custom(enterpriseNameExits),
    body("yearOfCreation").optional().isInt().withMessage("No es caracter valido, la fecha es un numero"),
    validateFields,
    handleErrors
]

