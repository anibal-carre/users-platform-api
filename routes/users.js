import express from "express";
import {
  getUsers,
  findUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:_id", findUser);
router.post("/create", createUser);
router.delete("/delete/:_id", deleteUser);
router.put("/update/:_id", updateUser);

export default router;
