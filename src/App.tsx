import React from 'react';
import AuthProvider from './auth/Auth';
import RootRouter from './router/RootRouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileAlt, faQuestionCircle, faCommentAlt, faFolderPlus, faInfoCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { store } from './store/index';

library.add(faHome, faFileAlt, faQuestionCircle, faCommentAlt, faFolderPlus, faInfoCircle, faLock);

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<RootRouter></RootRouter>
			</AuthProvider>
		</Provider>
	);
}

export default App;
