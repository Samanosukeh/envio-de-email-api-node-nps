import express from 'express';
//tente instalar a depedencia de tipagem do express: npm i --save-dev @types/express só no desenvolvimento
const app = express();

const PORT = 3333;

app.get("/", (request, response) => {
    //return response.send("Hello world");print
    return response.json({message: "Hello world"});
});

// 1 parâmetro: rota,
// 1 parâmetro: request, response
app.post("/",  (request, response) => {
    // recebendo os dados
    return response.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(PORT, () => console.log("Server is running!"));
// node precisa de um tradutor para o typescript, instalar o typescript: npm add typescript -D
// iniciando o typescript dentro da aplicação: npm run tsc -- --init 
