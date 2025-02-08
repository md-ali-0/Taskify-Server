import { Role } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { TaskController } from "./task.controller";

const router = Router();

router.get("/", auth(Role.USER, Role.ADMIN), TaskController.getAll);
router.get("/:id", TaskController.getOne);
router.post("/", auth(Role.USER, Role.ADMIN), TaskController.create);
router.patch("/:id", auth(Role.USER, Role.ADMIN), TaskController.update);
router.delete("/:id", auth(Role.USER, Role.ADMIN), TaskController.remove);

export const TaskRoutes = router;
