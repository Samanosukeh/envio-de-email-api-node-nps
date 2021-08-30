import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;// recebendo apenas o nome e e-mail passados pelo json
        
        const usersRepository = getCustomRepository(UsersRepository);//passando a entidade que quero criar

        // select * from users where email="email" :)
        const userAlreadyExists = await usersRepository.findOne({email});

        if(userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists!"
            });
        }

        const user = usersRepository.create({name, email}); //criando o objeto usuário para depois salvar...

        await usersRepository.save(user);

        return response.json({message: user});
    }
}

export { UserController };
