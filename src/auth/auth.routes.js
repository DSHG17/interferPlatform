import { Router } from "express"
import { login, register } from "./auth.controller.js"
import { loginValidator, registerValidator } from "../middlewares/user-validators.js"
import { uploadProfilePicture } from "../middlewares/multer-upload.js"

const router = Router()

