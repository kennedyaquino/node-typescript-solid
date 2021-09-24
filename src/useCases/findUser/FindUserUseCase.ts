import { IUsersRepository } from "../../repositories/IUsersRepository";

class FindUserUseCase {

  constructor(private usersRepository: IUsersRepository){}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}

export { FindUserUseCase }