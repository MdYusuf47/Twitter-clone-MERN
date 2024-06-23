import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import {deleteNotifications, getNotifications } from "../controllers/notofication.controller.js"

const router  = express.Router()


router.get("/",protectRoute,getNotifications)
router.delete("/",protectRoute,deleteNotifications) // for delete all notification
// router.delete("/:id",protectRoute,deleteNotification) // for delete only one notification
export default router