import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import pacientesRouter from './pacientes.routes';
import prontuariosRouter from './prontuarios.routes'
import consultasRouter from './consultas.routes'

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/pacientes', pacientesRouter);
routes.use('/prontuarios', prontuariosRouter);
routes.use('/consultas', consultasRouter);

export default routes;