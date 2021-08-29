import express from 'express';
//tente instalar a depedencia de tipagem do express: npm i --save-dev @types/express só no desenvolvimento
const app = express();

app.listen(3333, () => console.log("Server is running!"));
// node precisa de um tradutor para o typescript, instalar o typescript: npm add typescript -D
// iniciando o typescript dentro da aplicação: npm run tsc -- --init 