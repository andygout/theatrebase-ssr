import oAutocomplete from '@financial-times/o-autocomplete';
import { debounce } from '@financial-times/o-utils';

import { MODEL_TO_DISPLAY_NAME_MAP, MODEL_TO_ROUTE_MAP } from '../../utils/constants';

const URL_BASE = 'http://localhost:3003';

async function performFetch (url) {

	const response = await fetch(url, { mode: 'cors' });

	if (response.status !== 200) throw new Error(response.statusText);

	const searchResults = response.json();

	return searchResults;

}

async function getSearchResults (searchTerm) {

	const url = `${URL_BASE}/api/search?searchTerm=${searchTerm}`;

	const searchResults = await performFetch(url);

	return searchResults;

}

function suggestionTemplate (option) {

	return `
		<div>
			<strong>${option.name}</strong>
			(${MODEL_TO_DISPLAY_NAME_MAP[option.model]})
		</div>
	`;

}

function mapOptionToSuggestedValue (option) {

	const { name } = option;

	const suggestedValue = name;

	return suggestedValue;

}

function onConfirm (selectedOption) {

	const { model, uuid } = selectedOption;

	const instancePath = `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

	location.href = instancePath; // eslint-disable-line no-undef

}

async function customSearchResults (searchTerm, populateOptions) {

	if (searchTerm === '') {

		populateOptions([]);

		return;

	}

	const searchResults = await getSearchResults(searchTerm);

	populateOptions(searchResults);

}

document.addEventListener('DOMContentLoaded', function () { // eslint-disable-line no-undef

	const oAutocompleteElement = document.getElementById('autocomplete'); // eslint-disable-line no-undef

	new oAutocomplete(oAutocompleteElement, {
		suggestionTemplate,
		mapOptionToSuggestedValue,
		onConfirm,
		source: debounce(customSearchResults, 1000)
	});

});
