import { h } from 'preact'; // eslint-disable-line no-unused-vars

import { Footer, Head, Header, InstanceLabel, Navigation, PageTitle } from '.';
import { CurrentPath } from '../contexts';

const App = props => {

	const { currentPath, documentTitle, pageTitle, model, children } = props;

	return (
		<html>

			<Head documentTitle={documentTitle} />

			<body>

				<div className="page-container">

					<Header />

					<Navigation />

					<main className="main-content">

						{
							model && (
								<InstanceLabel model={model} />
							)
						}

						<PageTitle text={pageTitle} />

						<CurrentPath.Provider value={currentPath}>

							{ children }

						</CurrentPath.Provider>

					</main>

					<Footer />

				</div>

			</body>

		</html>
	);

};

export default App;
