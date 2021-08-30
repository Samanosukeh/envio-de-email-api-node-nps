import 'reflect-metadata';//deixar em primeiro import
import express from 'express';

import "./database";
import { router } from './router';

//tente instalar a depedencia de tipagem do express: npm i --save-dev @types/express só no desenvolvimento
const app = express();
const PORT = 3333;

app.use(express.json());//habilitar trabalhar com o formato json
app.use(router);


app.listen(PORT, () => console.log("Server is running!"));
// node precisa de um tradutor para o typescript, instalar o typescript: npm add typescript -D
// iniciando o typescript dentro da aplicação: npm run tsc -- --init 
// utilizando a ORM do typeorm para acessar os dados: npm add typeorm reflect-metadata
// para desenvolvimento será usado sqlite: npm add sqlite3