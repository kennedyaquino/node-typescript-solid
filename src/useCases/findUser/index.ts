import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";

const postgresUserRepository = new PostgresUsersRepository();

const findUserUseCase = new FindUserUseCase(postgresUserRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController }