import {Router} from "express"
import { registerEnterpriseValidator } from "../middlewares/enterprise-validators.js";
import { registerEnterprise } from "./enterprise.controller.js";

const router = Router()


/**
 * @swagger
 * /createEnterprise:
 *   post:
 *     summary: Create enterprise for the admins
 *     tags:
 *       - Enterprise
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ubication:
 *                 type: string
 *               impact:
 *                 type: string
 *               about:
 *                 type: string
 *               contact:
 *                 type: string
 *               yearOfCreation:
 *                 type: integer
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Enterprise created
 *       500:
 *         description: Enterprise registration failed
 */

router.post(
    "/createEnterprise",
    registerEnterpriseValidator,
    registerEnterprise
)

export default router