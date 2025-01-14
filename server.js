import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("./src/db/movies.json"); // Ajuste o caminho conforme necessário
const middlewares = jsonServer.defaults();

// Permitir CORS de qualquer origem
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log("JSON Server está rodando na porta 3000");
});
