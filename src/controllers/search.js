import fetchFromApi from '../lib/fetch-from-api';

export default async (request, response, next) => {

	const { query: { searchTerm } } = request;

	try {

		const searchResults = await fetchFromApi(`/search?searchTerm=${searchTerm}`);

		return response.send(searchResults);

	} catch (error) {

		return next(error);

	}

};
