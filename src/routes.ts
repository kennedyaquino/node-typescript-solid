import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { findUserController } from "./useCases/findUser";

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/users/find", (request, response) => {
  return findUserController.handle(request, response);
})

export { router }