import { h } from 'preact'; // eslint-disable-line no-unused-vars

import { App, InstanceFacet, JoinedRoles, List } from '../../components';

const Character = props => {

	const { documentTitle, pageTitle, character } = props;

	const { model, variantNamedDepictions, materials, variantNamedPortrayals, productions } = character;

	return (
		<App documentTitle={documentTitle} pageTitle={pageTitle} model={model}>

			{
				variantNamedDepictions?.length > 0 && (
					<InstanceFacet labelText='Variant named depictions'>

						<JoinedRoles instances={variantNamedDepictions} />

					</InstanceFacet>
				)
			}

			{
				materials?.length > 0 && (
					<InstanceFacet labelText='Materials'>

						<List instances={materials} />

					</InstanceFacet>
				)
			}

			{
				variantNamedPortrayals?.length > 0 && (
					<InstanceFacet labelText='Variant named portrayals'>

						<JoinedRoles instances={variantNamedPortrayals} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<List instances={productions} />

					</InstanceFacet>
				)
			}

		</App>
	);

};

export default Character;
