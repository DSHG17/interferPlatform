import {Router} from "express"
import { registerEnterpriseValidator, sortEnterprisesValidator, updateEnterpriseValidator } from "../middlewares/enterprise-validators.js";
import { registerEnterprise, sortEnterprisesAZ,sortEnterprisesZA, sortEnterprisesExpirience, updateEnterprise} from "./enterprise.controller.js";

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


/**
 * @swagger
 * /sortEnterprisesAZ:
 *   get:
 *     summary: Retrieve a list of enterprises sorted alphabetically by name
 *     tags:
 *       - Enterprises
 *     parameters:
 *       - in: query
 *         name: limite
 *         description: Number of enterprises to return (default is 10)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: desde
 *         description: Skip the first N enterprises (default is 0)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: A list of enterprises sorted alphabetically with years of existence
 *       500:
 *         description: Internal server error
 */
router.get(
    "/sortEnterprisesAZ",
    sortEnterprisesValidator,
    sortEnterprisesAZ
)

/**
 * @swagger
 * /sortEnterprisesZA:
 *   get:
 *     summary: Retrieve a list of enterprises sorted from Z to A by name
 *     tags:
 *       - Enterprises
 *     parameters:
 *       - in: query
 *         name: limite
 *         description: Number of enterprises to return (default is 10)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: desde
 *         description: Skip the first N enterprises (default is 0)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: A list of enterprises sorted from Z-A
 *       500:
 *         description: Internal server error
 */
router.get(
    "/sortEnterprisesZA",
    sortEnterprisesValidator,
    sortEnterprisesZA
)

/**
 * @swagger
 * /sortEnterprisesZA:
 *   get:
 *     summary: Retrieve a list of enterprises sorted from expirience
 *     tags:
 *       - Enterprises
 *     parameters:
 *       - in: query
 *         name: limite
 *         description: Number of enterprises to return (default is 10)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: desde
 *         description: Skip the first N enterprises (default is 0)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: A list of enterprises sorted from expirience
 *       500:
 *         description: Internal server error
 */
router.get(
    "/sortEnterprisesExpirience",
    sortEnterprisesValidator,
    sortEnterprisesExpirience
)

/**
 * @swagger
 * /updateEnterprise/{eid}:
 *   put:
 *     summary: Update an enterprise by its ID
 *     tags:
 *       - Enterprises
 *     parameters:
 *       - in: path
 *         name: eid
 *         description: The ID of the enterprise to update
 *         required: true
 *         schema:
 *           type: string
 *           example: "607c72ef1c0b6b001f7a6e8e"
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
 *       200:
 *         description: Enterprise updated successfully
 *       500:
 *         description: Internal server error
 */
router.put(
    "/updateEnterprise/:eid",
    updateEnterpriseValidator,
    updateEnterprise
)


export default router