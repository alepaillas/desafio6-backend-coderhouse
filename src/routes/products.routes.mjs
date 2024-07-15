import { Router } from "express";
import productsControllers from "../controllers/products.controllers.mjs";

const router = Router();

router.get("/", productsControllers.getAll);

router.get("/:id", productsControllers.getById);

router.post("/", productsControllers.create);

router.put("/:id", productsControllers.update);

router.delete("/:id", productsControllers.deleteOne);

export default router;
