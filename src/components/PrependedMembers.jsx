import { Fragment, h } from 'preact'; // eslint-disable-line no-unused-vars

import { CommaSeparatedInstanceLinks } from '.';

const PrependedMembers = props => {

	const { members } = props;

	return (
		<Fragment>

			<CommaSeparatedInstanceLinks instances={members} />

			<Fragment>&nbsp;for&nbsp;</Fragment>

		</Fragment>
	);

};

export default PrependedMembers;