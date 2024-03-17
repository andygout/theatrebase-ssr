import { Router } from 'express';

import { search as searchController } from './controllers';

const router = new Router();

router.get('/search', (request, response, next) =>
	searchController(request, response, next));

export default router;
