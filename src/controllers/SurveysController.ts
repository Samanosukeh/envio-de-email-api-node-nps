import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveyController {
    /* Método para criar uma survey */
    async create(request: Request, response: Response){
        const { title, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({ title, description });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);//201: status para criar algo

    }

    /* Método para listar todos os surveys */
    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();//pegando todos os registros de surveys

        return response.json(all);
    }
}

export { SurveyController };