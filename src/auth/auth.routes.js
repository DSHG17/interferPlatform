import { Router } from "express"
import { login } from "./auth.controller.js"
import { loginValidator } from "../middlewares/user-validators.js"


const router = Router()

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login for the admins
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Login failed , server error
 */

router.post(
    "/login",
    loginValidator,
    login
)
export default router