import Production from '../models/production';
import { getAlert } from '../lib/alert';
import getPageData from '../lib/get-page-data';
import handleModelResponse from '../lib/handle-model-response';

const newRoute = (req, res, next) => {

	const production = new Production();

	const page = getPageData(production, 'create');

	res.render(`${production.model.toLowerCase()}s/form`, { page, production });

};

const createRoute = (req, res, next) => {

	const production = new Production(req.body);

	return production.create()
		.then(({ production }) => {

			handleModelResponse(req, res, production, 'create');

		})
		.catch(err => next(err));

};

const editRoute = (req, res, next) => {

	const production = new Production(req.params);

	return production.edit()
		.then(({ production }) => {

			const page = getPageData(production, 'update');

			res.render(`${production.model.toLowerCase()}s/form`, { page, production });

		})
		.catch(err => next(err));

};

const updateRoute = (req, res, next) => {

	const production = new Production(req.body);

	return production.update()
		.then(({ production }) => {

			handleModelResponse(req, res, production, 'update');

		})
		.catch(err => next(err));

};

const deleteRoute = (req, res, next) => {

	const production = new Production(req.body);

	return production.delete()
		.then(({ production }) => {

			handleModelResponse(req, res, production, 'delete');

		})
		.catch(err => next(err));

};

const showRoute = (req, res, next) => {

	const production = new Production(req.params);

	return production.show()
		.then(({ production }) => {

			const page = getPageData(production, 'show');

			res.render(`${production.model.toLowerCase()}s/show`, { page, production, alert: getAlert(req) });

		})
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Production.list()
		.then(({ productions }) => {

			const page = { documentTitle: ' | Home', title: 'Productions' };

			res.render('productions/list', { page, productions, alert: getAlert(req) });

		})
		.catch(err => next(err));

};

export {
	newRoute,
	createRoute,
	editRoute,
	updateRoute,
	deleteRoute,
	showRoute,
	listRoute
};
