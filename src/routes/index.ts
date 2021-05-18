import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import pacientesRouter from './pacientes.routes';
import prontuariosRouter from './prontuarios.routes';
import consultasRouter from './consultas.routes';
import registrosRouter from './registros.routes';
import triagensRouter from './triagens.routes';
import uploadsRouter from './uploads.routes';
import examesRouter from './exames.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/pacientes', pacientesRouter);
routes.use('/prontuarios', prontuariosRouter);
routes.use('/consultas', consultasRouter);
routes.use('/registros', registrosRouter);
routes.use('/triagens', triagensRouter);
routes.use('/uploads', uploadsRouter);
routes.use('/exames', examesRouter);

export default routes;