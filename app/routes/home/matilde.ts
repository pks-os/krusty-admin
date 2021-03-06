import express, { Request, Response } from 'express';
import { MatildeClients, MatildeCatalogs, MatildeCatalogsHandler, MatildeCatalogsNames, MatildeCode } from '../../middlewares/home/matilde.mw';
import { ShowKeys } from '../../middlewares/home/keys-admin.mw';


export const MatildeRouter = express.Router();

MatildeRouter.get('/matilde-clients', MatildeClients);
MatildeRouter.get('/matilde-keys', ShowKeys);
MatildeRouter.get('/matilde-catalogs', MatildeCatalogs);
MatildeRouter.post('/matilde-catalogs/:action/:table', MatildeCatalogsHandler);
MatildeRouter.get('/matilde-catalogs-names', MatildeCatalogsNames);
MatildeRouter.get('/matilde-codes/:selected', MatildeCode);