import { Router } from "express";

import auth from "./middlewares/auth";

import HelloControler from "./controllers/HelloControler";
import SessionsController from "./controllers/SessionsController";
import RepositoriesController from "./controllers/RepositoriesController";
import UsersController from "./controllers/UsersController";

const routes = new Router();


routes.post('/sessions', SessionsController.create);
routes.get('/hello', HelloControler.index);

 // routes.use(auth);

// Rotas de usuário
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

// Rotas do repositório
routes.get('/repositories/:user_id/repositories', RepositoriesController.index);
routes.post('/repositories/:user_id/repositories', RepositoriesController.create);
routes.delete('/repositories/:user_id/repositories', RepositoriesController.destroy);

export default routes;