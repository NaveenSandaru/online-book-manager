import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

import counsellorRouter from './routes/counsellor-routes.js';
import adminRouter from './routes/admin-routes.js';
import superAdminRouter from './routes/super-admin-routes.js';
import leadRouter from './routes/lead-routes.js';
import commentRouter from './routes/comment-route.js';
import deadRouter from './routes/dead-routes.js';
import authRouter from './auth-routes/auth-route.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {credentials: true, origin: 'http://localhost:3000'};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use('/',express.static(join(__dirname, 'public')));

app.use('/counsellors',counsellorRouter);
app.use('/admins',adminRouter);
app.use('/superadmins',superAdminRouter);
app.use('/leads',leadRouter);
app.use('/dead',deadRouter);
app.use('/auth', authRouter);
app.use('/comments', commentRouter);

app.listen(PORT, ()=>console.log(`Server listening on ${PORT}`));