import { Request, Response } from "express";
import { User } from "../../entities/User";
import { FindUserUseCase } from "./FindUserUseCase";

class FindUserController {

  constructor(private findUserUseCase: FindUserUseCase) {

  }

  async handle(request: Request, response: Response) : Promise<Response> {
    const { email } = request.body;

    try {
      const user: User = await this.findUserUseCase.execute(email);
      

      return response.status(200).json(user);

    } catch(error) {
      return response.status(400).json({
        message: error.message || "Unexpected error"
      })
    }

  }
}

export { FindUserController }